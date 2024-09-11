// import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import DecodeToken from '../../../modules/DecodeToken';
import {toast, ToastContainer} from 'react-toastify'
import PublicApiInstance from '../../../Utils/PublicApiInstance';


const ForgetPassword = () => {

    const { token } = useParams();
    const data = DecodeToken(token);
    console.log(data)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (password === '' || confirmPassword === '') {
            toast.error('Please fill all the fields');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        const values = { password };
        try {
            await PublicApiInstance.put(
                `${process.env.REACT_APP_SERVER_URL}/auth/changepassword/${token}`, values);
            setPassword('');
            setConfirmPassword('');
            toast.success("Password reset successfully");

            setTimeout(() => {
                navigate('/admin/signin');
            }, 2000);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <div className="signin-container">
                <div className='signin-logo'>
                <img src="/logo.webp" alt="Logo" style={{ width: '100px', paddingRight: '10px' }} />
                <h1>Taj Cars </h1>
                </div>
                <p style={{marginTop: '20px'}}>Change your password</p>
                <form className="signin-form" onSubmit={handleSubmit}>
               
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    
                    <button disabled={loading} className="singin-button" type="submit">Fprget Password</button>
                </form>
                <div className="signup-link">
                    <p>Back to sing in? <NavLink to="/admin/signin">Sign In</NavLink></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ForgetPassword