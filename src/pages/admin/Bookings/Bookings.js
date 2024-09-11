import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const navigate = useNavigate();
  const fetchBookings = async () => {
    try {
      const response = await PublicApiInstance.get('/booking');
      setBookings(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await PrivateApiInstance.delete(`/booking/${id}`);
      toast.success('Booking deleted successfully');
      fetchBookings();
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
          <h1>Bookings</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Bookings
              </NavLink>
            </li>
          </ul>
        </div>
     
      </div>

      <div className="bottom-data" style={{ marginTop: '50px' }}>
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>from</th>
                <th>to</th>
                <th>date</th>
                <th>time</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.client_name}</td>
                    <td>{item.client_contact}</td>
                    <td>{item.client_address}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.time}</td>
                    <td>{item.status === 1 ? 'Completed' : 'Processing'}</td>
                    <td>
                      <button className="edit-btn" onClick={() => navigate(`/admin/booking/edit/${item.id}`)}>
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
                  <td colSpan="10">No helps found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

   
    </Container>
  );
};

export default Bookings;
