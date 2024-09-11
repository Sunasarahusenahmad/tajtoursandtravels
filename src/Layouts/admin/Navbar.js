import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <i className="bx bx-menu"></i>
      <form action="#">
        <div className="form-input" style={{ display: 'none' }}>
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="theme-toggle" hidden />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>

      <span className="profile">
        <NavLink to={`/admin/settings`}>
          <i class="bx bxs-user-circle"></i>
          {/* <img alt='img' src="/logo.jpg" /> */}
        </NavLink>
      </span>
    </nav>
  );
};

export default Navbar;
