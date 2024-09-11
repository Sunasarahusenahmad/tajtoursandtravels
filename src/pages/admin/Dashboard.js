import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../Layouts/admin/Container';
import Loading from '../../Utils/Loading';
import PrivateApiInstance from '../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [totalCounts, setTotalCounts] = useState({
    vehicles: 0,
    blogs: 0,
    bookings: 0,
    services: 0,
    reviews: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchCounts = async () => {
    try {
      const response = await PrivateApiInstance.get('/shared/counts');
      console.log(response.data?.data);
      setTotalCounts(response.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const navigationLinks = [
    { href: `/admin/booking`, text: 'Bookings' },
    { href: `/admin/vehicle`, text: 'Vehicles' },
    { href: `/admin/service`, text: 'Services' },
    { href: `/admin/blog`, text: 'Blogs' },
    { href: `/admin/review`, text: 'Reviews' },
    { href: `/admin/util`, text: 'Utils' },
    { href: `/admin/settings`, text: 'Settings' },
  ];

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }
  return (
    <>
      <Container>
        <div className="header">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <NavLink to="#">Analytics</NavLink>
              </li>
              /
              <li>
                <NavLink to="#" className="active">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <NavLink to="#" className="report">
            <i className="bx bx-cloud-download"></i>
            <span>Download CSV</span>
          </NavLink> */}
        </div>

        <ul className="insights">
          <li>
            <i className="bx bxs-car"></i>
            <span className="info">
              <h3>{totalCounts.vehicles}</h3>
              <p>Total Vehicles</p>
            </span>
          </li>
          <li>
            <i className="bx bx-calendar-check"></i>
            <span className="info">
              <h3>{totalCounts.bookings}</h3>
              <p>Total Bookings</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-star-half"></i>
            <span className="info">
              <h3>{totalCounts.reviews}</h3>
              <p>Total Reviews</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-envelope-open"></i>
            <span className="info">
              <h3>{totalCounts.blogs}</h3>
              <p>Total Blogs</p>
            </span>
          </li>

          <li>
            <i className="bx bx-donate-heart"></i>
            <span className="info">
              <h3>{totalCounts.services}</h3>
              <p>Total Services</p>
            </span>
          </li>
        </ul>

        <div className="bottom-data">
          <div className="orders">
            <div className="header">
              <i className="bx bx-receipt"></i>
              <h3>Quick Links</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {navigationLinks.map((item, index) => (
                  <tr key={index}>
                    <td>{item.text}</td>
                    <td>
                      <NavLink to={item.href}>Visit</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
