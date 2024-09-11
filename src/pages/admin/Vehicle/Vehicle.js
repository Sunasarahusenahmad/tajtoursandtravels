import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import {truncateText} from '../../../Utils/TruncateText';
import { toast } from 'react-toastify';

const Vehicle = () => {
  const [vehicle, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const fetchVehicles = async () => {
    try {
      const response = await PublicApiInstance.get('/vehicle');
      setVehicles(response.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await PrivateApiInstance.delete(`/vehicle/${id}`);
      fetchVehicles();
      toast.success('Vehicle deleted successfully');
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
          <h1>Vehicles</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Vehicles
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/admin/vehicle/add" className="report">
          <i className="bx bx-plus"></i>
          <span>Add Vehicle</span>
        </NavLink>
      </div>

      <div className="bottom-data" style={{ marginTop: '50px', overflowX: 'auto' }}>
  <div className="orders" style={{ overflowX: 'auto' }}>
    <table style={{ minWidth: '150px', width: '100%' }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>Ac</th>
          <th>Bags</th>
          <th>Seats</th>
          <th>Min Kelometer</th>
          <th>Night Stay</th>
          <th>Parking</th>
          <th>Airport Charge</th>
          <th>Toll Tax</th>
          <th>Driver Allownce</th>
          <th>Border Tax</th>
          <th>Smoking And Drinking</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {vehicle.length > 0 ? (
          vehicle.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${item.image}`}
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
              <td>{item.ac ? 'Yes' : 'No'}</td>
              <td>{item.bags === "true" ? "Yes" : "No"}</td>
              <td>{item.seats}</td>
              <td>{item.minimum_kilometers}</td>
              <td>{truncateText(item.night_stay, 8)}</td>
              <td>{truncateText(item.parking, 8)}</td>
              <td>{truncateText(item.airport_charges, 8)}</td>
              <td>{truncateText(item.toll_tax, 8)}</td>
              <td>{truncateText(item.driver_allowance, 8)}</td>
              <td>{truncateText(item.border_tax, 8)}</td>
              <td>{truncateText(item.smoking_and_drinking, 8)}</td>
              <td>
                <button className="edit-btn" onClick={() => navigate(`/admin/vehicle/edit/${item.id}`)}>
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
            <td colspan="15">No vehicles found</td>

          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

    </Container>
  );
};

export default Vehicle;
