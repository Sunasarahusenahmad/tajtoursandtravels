import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import PublicApiInstance from '../../../Utils/PublicApiInstance';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isbtndisabled, setIsbtndisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsbtndisabled(true);
    const values = { email, password };

    try {
      const response = await PublicApiInstance.post(`/auth/login`, values);
      const token = response?.data?.data?.token;
      Cookies.set('token', token, {
        expires: 7,
        path: '/',
        secure: false,
        sameSite: 'Lax',
      });


      navigate(`/admin/dashboard`);
    } catch (error) {
      console.log(error);
      alert('Invalid credentials');
    }

    setIsbtndisabled(false);
  };


  return (
    <div className="wrapper">
      <div className="signin-container">
        <div className="signin-logo">
          <img src="/logo.webp" alt="Logo" style={{ width: '100px', paddingRight: '10px' }} />
          <h1>Taj Cars </h1>
        </div>
        <p style={{ marginTop: '20px' }}>Sign into your account</p>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Or Username:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
           
            <NavLink to="/admin/sendemail">Forgot Password?</NavLink>
          </div>
          <button
            disabled={isbtndisabled}
            style={isbtndisabled ? { cursor: 'not-allowed' } : null}
            className="singin-button"
            type="submit"
          >
            {isbtndisabled ? (
              <div className="singin-spinner">
                <div className="singin-spinner-child"></div>
              </div>
            ) : (
              'Sign In'
            )}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Signin;
