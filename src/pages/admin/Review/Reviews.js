import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const fetchReviews = async () => {
    try {
      const response = await PublicApiInstance.get('/review');
      setReviews(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await PrivateApiInstance.delete(`/review/${id}`);
      toast.success('Review deleted successfully');
      fetchReviews();
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

  return (
    <Container>
      <div className="header">
        <div className="left">
          <h1>Reviews</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/admin/review/add" className="report">
          <i className="bx bx-plus"></i>
          <span>Add Review</span>
        </NavLink>
      </div>

      <div className="bottom-data" style={{ marginTop: '50px' }}>
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Text</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length > 0 ? (
                reviews.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.review_text}</td>
                    <td>{item.status ? 'Approved' : 'Pending'}</td>
                    <td>
                      <button className="edit-btn" onClick={() => navigate(`/admin/review/edit/${item.id}`)}>
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
                  <td colSpan="5">No helps found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

   
    </Container>
  );
};

export default Reviews;
