// import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import { toast, ToastContainer } from 'react-toastify'

const SendEmail = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await PublicApiInstance.post('/auth/sendmail');
        setLoading(false);
        toast.success('Email sent successfully');
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
        setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="signin-container">
        <div className="signin-logo">
        <img src="/logo.webp" alt="Logo" style={{ width: '100px', paddingRight: '10px' }} />
        <h1>Taj Cars </h1>
        </div>
        <p style={{ marginTop: '20px' }}>Change your password</p>
        <form className="signin-form" onSubmit={handleSubmit}>
          <button className="singin-button" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
        <div className="signup-link">
          <p>
            Back to sing in? <NavLink to="/admin/signin">Sign In</NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SendEmail;
