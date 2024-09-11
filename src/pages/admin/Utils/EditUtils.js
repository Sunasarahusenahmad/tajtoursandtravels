import React, { useEffect, useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import { useNavigate, useParams } from 'react-router-dom';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const EditUtils = () => {
  // fetch id using useParams
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    km: 0,
    customer: 0,
    yearOfJourney: 0,
    destination : 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    console.log(data);
    
    setLoading(true);

    PrivateApiInstance.put(`/util/${id}`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
        setLoading(false);
      });

    navigate('/admin/util');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PublicApiInstance.get(`/util/${id}`);
        setData({
          km: response.data.data.km,
          customer: response.data.data.customer,
          yearOfJourney: response.data.data.year_of_journey,
          destination: response.data.data.destination
        });
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt"></i>
            <h3>Add Review</h3>
          </div>
          <section className={styles.container}>
            <form className={styles.form}>
              {/* KM Input */}
              <div className={styles.input_box}>
                <label htmlFor="km">Total Kelometers</label>
                <input
                  type="number"
                  placeholder="Enter Total Kelometers..."
                  name="km"
                  id="km"
                  onChange={handleChange}
                  value={data.km}
                />
              </div>


              <div className={styles.input_box}>
                <label htmlFor="customer">Total Customers</label>
                <input
                  type="number"
                  placeholder="Enter Total Customers..."
                  name="customer"
                  id="customer"
                  onChange={handleChange}
                  value={data.customer}
                />
              </div>


              <div className={styles.input_box}>
                <label htmlFor="yearOfJourney">Year Of Journey</label>
                <input
                  type="number"
                  placeholder="Enter Year Of Journey..."
                  name="yearOfJourney"
                  id="yearOfJourney"
                  onChange={handleChange}
                  value={data.yearOfJourney}
                />
              </div>


              <div className={styles.input_box}>
                <label htmlFor="destination">Total Destination</label>
                <input
                  type="number"
                  placeholder="Enter Total Destination..."
                  name="destination"
                  id="destination"
                  onChange={handleChange}
                  value={data.destination}
                />
              </div>

            
              <button type="submit" disabled={loading} onClick={saveData}>
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default EditUtils;
