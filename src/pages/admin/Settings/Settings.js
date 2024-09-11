import React, { useEffect, useState } from 'react';
import Container from '../../../Layouts/admin/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from '../../../Utils/Loading';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import styles from '../../../assets/css/form.module.css';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    mobileNumber: '',
    username: '',
  });

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await PrivateApiInstance.get(`/auth/profile`);
        setData({
          id: response.data.data.id,
          name: response.data.data.name,
          email: response.data.data.email,
          mobileNumber: response.data.data.mobile_number,
          username: response.data.data.username,
        });
        setLoading(false);
      } catch (error) {
        toast.error('Something went wrong');
        setLoading(false);
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (data.name === '' || data.email === '' || data.username === '' || data.mobileNumber === '') {
      toast.error('Please fill all the fields');
      return;
    }
    // Confirmation message
    if (!window.confirm('Are you sure you want to save the changes?')) {
      return;
    }
    setLoading(true);

    PrivateApiInstance.put(`/auth/updateprofile/${data.id}`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setIsEdit(true);
        const token = res.data.data.token;
        // Update Token In Cookie
        Cookies.set('token', token);
        toast.success('Profile updated successfully');
      })
      .catch((err) => {
        toast.error('Something went wrong');
        console.log(err);
        setLoading(false);
      });

    navigate('/admin/settings');
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
          <h1>Settings</h1>
          <ul className="breadcrumb">
            <NavLink to="/admin/dashboard">
              <li>Dashboard</li>
            </NavLink>
            /
            <li>
              <NavLink to="#" className="active">
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-cog"></i>
            <h3>Settings</h3>
          </div>
          <div className="profile-container">
            <div className="profile-header">
              <img src={data.profileImage || '/assets/img/defultavtar.png'} alt="Profile" className="profile-image" />
              <h2>{data.name}</h2>
              <p>@{data.username}</p>
            </div>
            <div className="profile-body">
              <div className="profile-info">
                <h3>Personal Information</h3>
                <p>
                  <strong>Email:</strong> {data.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {data.mobileNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reminders">
          <div className="header">
            <h3>Edit Profile</h3>
            <span onClick={handleEdit}>{isEdit ? <i className="bx bx-edit"></i> : <i className="bx bx-x"></i>}</span>
          </div>
          <section className={styles.container}>
            <form className={styles.form}>
              {/* name Input */}
              <div className={styles.input_box}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  name="name"
                  id="name"
                  onChange={handleChange}
                  disabled={isEdit}
                  value={data.name}
                />
              </div>

              {/* Email Input */}
              <div className={styles.input_box}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter email..."
                  name="email"
                  id="email"
                  onChange={handleChange}
                  disabled={isEdit}
                  value={data.email}
                />
              </div>

              {/* Mobile Input */}
              <div className={styles.input_box}>
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="number"
                  placeholder="Enter mobile number..."
                  name="mobileNumber"
                  id="mobileNumber"
                  onChange={handleChange}
                  disabled={isEdit}
                  value={data.mobileNumber}
                />
              </div>

              {/* Username Input */}
              <div className={styles.input_box}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Enter username..."
                  name="username"
                  id="username"
                  onChange={handleChange}
                  disabled={isEdit}
                  value={data.username}
                />
              </div>

              <button
                type="submit"
                className={isEdit ? styles.editModeDisabled : styles.save}
                disabled={isEdit || loading}
                onClick={saveData}
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Settings;
