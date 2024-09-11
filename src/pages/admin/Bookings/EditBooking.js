import React, { useEffect, useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { useNavigate, useParams } from 'react-router-dom';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import { formatDate } from '../../../Utils/Datefuntion';
import { toast } from 'react-toastify';

const EditBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    clientName: '',
    clientContact: '',
    clientAddress: '',
    from: '',
    to: '',
    date: '',
    time: '',
    vehicleId: null,
    status: false,
  });

  const fetchVehicles = async () => {
    try {
      const response = await PublicApiInstance.get('/vehicle');
      setVehicles(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PrivateApiInstance.get(`/booking/${id}`);
        setData({
          clientName: response.data.data.client_name,
          clientContact: response.data.data.client_contact,
          clientAddress: response.data.data.client_address,
          from: response.data.data.from,
          to: response.data.data.to,
          date: formatDate(response.data.data.date),
          time: response.data.data.time,
          vehicleId: response.data.data.vehicle_id,
          status: response.data.data.status,
        });
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    };

    fetchData();
    fetchVehicles();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const saveData = (e) => {
    e.preventDefault();
    if (
      data.clientName === '' ||
      data.clientContact === '' ||
      data.clientAddress === '' ||
      data.from === '' ||
      data.to === '' ||
      data.date === '' ||
      data.time === ''
    ) {
      toast.error('Please fill all the fields');
      return;
    }
    setLoading(true);

    PrivateApiInstance.put(`/booking/${id}`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    navigate('/admin/booking');
  };

  return (
    <Container>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt"></i>
            <h3>Edit Vehicle</h3>
          </div>
          <section className={styles.container}>
            <form className={styles.form}>
              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    placeholder="Enter Client Name..."
                    name="clientName"
                    id="clientName"
                    onChange={handleChange}
                    value={data.clientName}
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="clientContact">Client Contact</label>
                  <input
                    type="text"
                    placeholder="Enter Client Contact..."
                    name="clientContact"
                    id="clientContact"
                    onChange={handleChange}
                    value={data.clientContact}
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="clientAddress">Client Address</label>
                  <input
                    type="text"
                    placeholder="Enter Client Address..."
                    name="clientAddress"
                    id="clientAddress"
                    onChange={handleChange}
                    value={data.clientAddress}
                  />
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="from">From</label>
                  <input
                    type="text"
                    placeholder="Enter From..."
                    name="from"
                    id="from"
                    onChange={handleChange}
                    value={data.from}
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="to">To</label>
                  <input
                    type="text"
                    placeholder="Enter To..."
                    name="to"
                    id="to"
                    onChange={handleChange}
                    value={data.to}
                  />
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    placeholder="Enter Date..."
                    name="date"
                    id="date"
                    onChange={handleChange}
                    value={data.date}
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    placeholder="Enter Time..."
                    name="time"
                    id="time"
                    onChange={handleChange}
                    value={data.time}
                  />
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="status">Status</label>
                  <select name="status" id="status" onChange={handleChange} value={data.status}>
                    <option value={1}>Completed</option>
                    <option value={2}>Processing</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="vehicleId">Status</label>
                  <select name="vehicleId" id="vehicleId" onChange={handleChange} value={data.vehicleId}>

                    <option value=''>Select Vehicle</option>
                    {vehicles.map((vehicle) => (
                      <option value={vehicle.id} selected={vehicle.id === data.vehicleId}>{vehicle.name}</option>
                    ))}
                  </select>
                </div>

            
              </div>

              <button type="submit" onClick={saveData} disabled={loading}>
                {loading ? 'Updating...' : 'Update Vehicle'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default EditBooking;
