import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const Services = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  
  const fetchService = async () => {
    try {
      const response = await PublicApiInstance.get('/service');
      setService(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await PrivateApiInstance.delete(`/service/${id}`);
      toast.success('Service deleted successfully');
      fetchService();
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
          <h1>Service</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Service
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/admin/service/add" className="report">
          <i className="bx bx-plus"></i>
          <span>Add Service</span>
        </NavLink>
      </div>

      <div className="bottom-data" style={{ marginTop: '50px' }}>
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Text</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service.length > 0 ? (
                service.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${item.icon}`}
                        style={{
                          width: '150px',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                        alt={item.name}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.text}</td>
                    <td>
                      <button className="edit-btn" onClick={() => navigate(`/admin/service/edit/${item.id}`)}>
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

export default Services;
