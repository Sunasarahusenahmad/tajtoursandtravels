import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import Loading from '../../../Utils/Loading';
import { toast } from 'react-toastify';

const Utils = () => {
  const [util, setUtil] = useState({});
  const [loading, setLoading] = useState(true);
  
  const fetchUtils = async () => {
    try {
      const response = await PublicApiInstance.get('/util');
      setUtil(response.data?.data[0]);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUtils();
  }, []);


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
          <h1>Utils</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Utils
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={`/admin/util/edit/${util?.id}`} className="report">
          <i className="bx bx-edit"></i>
          <span>Edit Utils</span>
        </NavLink>
      </div>

      <ul className="insights">
            <li>
              <i className="bx bx-trip"></i>
              <span className="info">
                <h3>{util?.km}</h3>
                <p>Total Kelometers</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group"></i>
              <span className="info">
                <h3>{util?.customer}</h3>
                <p>Total Customers</p>
              </span>
            </li>
            <li>
            <i className='bx bx-globe' ></i>
              <span className="info">
                <h3>{util?.year_of_journey}</h3>
                <p>Year Of Journey</p>
              </span>
            </li>
            <li>
            <i className='bx bxs-map-pin'></i>
              <span className="info">
                <h3>{util?.destination}</h3>
                <p>Destination</p>
              </span>
            </li>
        </ul>
    </Container>
  );
};

export default Utils;
