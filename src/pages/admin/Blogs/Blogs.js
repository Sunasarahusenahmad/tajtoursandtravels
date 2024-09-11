import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await PublicApiInstance.get('/blog');
      setBlogs(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await PrivateApiInstance.delete(`/blog/${id}`);
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
    setDeleteLoading(false);
  };

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container>
      <div className="header">
        <div className="left">
          <h1>Blogs</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/admin/blog/add" className="report">
          <i className="bx bx-plus"></i>
          <span>Add Blogs</span>
        </NavLink>
      </div>

      <div className="bottom-data" style={{ marginTop: '50px' }}>
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Thumbnail</th>
                <th>Images</th>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs?.length > 0 ? (
                blogs?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${item.thumnail}`}
                        style={{
                          width: '150px',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                        alt={item.name}
                      />
                    </td>
                    {/* Slider Images */}
                    <td>
                      {
                        item.images.length > 0 && 
                        item.images.length === 1 ?
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${item.images[0]}`}
                          style={{
                            width: '150px',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '8px',
                          }}
                          alt={item.name}
                        /> :
                        <Slider {...sliderSettings} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                          {item.images.map((img, index) => (
                            <div
                              key={index}
                              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                              <img
                                src={`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${img}`}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                alt={item.name}
                              />
                            </div>
                          ))}
                        </Slider>
                      }
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => navigate(`/admin/blog/edit/${item.id}`)}>
                        <i className="bx bx-edit" style={{ fontSize: 22 }}></i>
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(item.id)} disabled={deleteLoading}>
                        <i className="bx bx-trash" style={{ fontSize: 22 }}></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <td colSpan="6">No blogs found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
