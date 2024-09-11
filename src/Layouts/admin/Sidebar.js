import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const navigate = useNavigate();
  const isLinkActive = (href) => {
    return window.location.pathname === href;
  };

  const navigationLinks = [
    { href: `/admin/dashboard`, text: 'Dashboard', icon: 'bx bxs-dashboard' },
    { href: `/admin/booking`, text: 'Bookings', icon: 'bx bx-calendar-check' },
    { href: `/admin/vehicle`, text: 'Vehicles', icon: 'bx bxs-car' },
    { href: `/admin/service`, text: 'Services', icon: 'bx bx-donate-heart' },
    { href: `/admin/blog`, text: 'Blogs', icon: 'bx  bxs-envelope-open' },
    { href: `/admin/review`, text: 'Reviews', icon: 'bx bxs-star-half' },
    { href: `/admin/util`, text: 'Utils', icon: 'bx bx-universal-access' },
    { href: `/admin/settings`, text: 'Settings', icon: 'bx bx-cog' },
  ];

  const logout = () => {
    Cookies.remove('token');
    navigate('/admin/signin');
  };

  return (
    <div className="sidebar">
      <NavLink to={`/admin/dashboard`}>
        <span className="logo">
          <i class="bx bxs-bar-chart-square"></i>
          <div className="logo-name">
            <span>Taj</span>Cars
          </div>
        </span>
      </NavLink>
      <ul className="side-menu">
        {navigationLinks.map((link, index) => (
          <li key={index} className={isLinkActive(link.href) ? 'active' : ''}>
            <NavLink to={link.href}>
              <i className={link.icon}></i>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li onClick={logout}>
          <NavLink to="#" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
