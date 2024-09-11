import React, { useEffect, useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    image: null,
    ac: false,
    bags: false,
    seats: 0,
    minimum_kilometers: 0,
    night_stay: 'N/A',
    parking: 'N/A',
    airport_charges: 'N/A',
    toll_tax: 'N/A',
    driver_allowance: 'N/A',
    border_tax: 'N/A',
    smoking_and_drinking: 'Not Allow'
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PrivateApiInstance.get(`/vehicle/${id}`);
        setData({
          name: response.data.data.name,
          ac: response.data.data.ac,
          bags: response.data.data.bags,
          seats: response.data.data.seats,
          minimum_kilometers: response.data.data.minimum_kilometers,
          night_stay: response.data.data.night_stay,
          parking: response.data.data.parking,
          airport_charges: response.data.data.airport_charges,
          toll_tax: response.data.data.toll_tax,
          driver_allowance: response.data.data.driver_allowance,
          border_tax: response.data.data.border_tax,
          smoking_and_drinking: response.data.data.smoking_and_drinking
        });

        if (response.data.data.image) {
          const previewUrl = `${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${response.data.data.image}`;
          setImagePreview(previewUrl);
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const saveData = (e) => {
    e.preventDefault();
    if (data.name === '' ) {
      toast.error('Please fill all the fields');
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append('name', data.name);
    if (data.image) {
      formData.append('image', data.image);
    }
    formData.append('ac', data.ac);
    formData.append('bags', data.bags);
    formData.append('seats', data.seats);
    formData.append('minimumKilometers', data.minimum_kilometers);
    formData.append('nightStay', data.night_stay);
    formData.append('parking', data.parking);
    formData.append('airportCharges', data.airport_charges);
    formData.append('tollTax', data.toll_tax);
    formData.append('driverAllowance', data.driver_allowance);
    formData.append('borderTax', data.border_tax);
    formData.append('smokingAndDrinking', data.smoking_and_drinking);

    PrivateApiInstance.put(`/vehicle/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate('/admin/vehicle');
      })
      .catch((err) => {
        toast.error('Something went wrong');
        console.log(err);
        setLoading(false);
      });
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
            <form className={styles.form} encType='multipart/form-data'>
              <div className={styles.input_box}>
                <label htmlFor='name'>Car Name</label>
                <input
                  type="text"
                  placeholder="Enter Car name..."
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor='ac'>AC</label>
                  <select name="ac" id="ac" onChange={handleChange} value={data.ac}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='bags'>Bags</label>
                  <select name="bags" id="bags" onChange={handleChange} value={data.bags}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='smoking_and_drinking'>Smoking And Drinking</label>
                  <select
                    name="smoking_and_drinking"
                    id="smoking_and_drinking"
                    onChange={handleChange}
                    value={data.smoking_and_drinking}
                  >
                    <option value='Allow'>Allow</option>
                    <option value='Not Allow'>Not Allow</option>
                  </select>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor='seats'>Total Seats</label>
                  <input
                    type="number"
                    placeholder="Enter Car seats..."
                    name="seats"
                    id="seats"
                    onChange={handleChange}
                    value={data.seats}
                  />
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='minimum_kilometers'>Minimum Kilometers</label>
                  <input
                    type="number"
                    placeholder="Enter Minimum Kilometers..."
                    name="minimum_kilometers"
                    id="minimum_kilometers"
                    onChange={handleChange}
                    value={data.minimum_kilometers}
                  />
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor='night_stay'>Night Stay</label>
                  <select name="night_stay" id="night_stay" onChange={handleChange} value={data.night_stay}>
                    <option value="Yes">Yes</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='parking'>Parking</label>
                  <select name="parking" id="parking" onChange={handleChange} value={data.parking}>
                    <option value='Paid By the Customer If applicable'>Paid By the Customer If applicable</option>
                    <option value='N/A'>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='airport_charges'>Airport Charges</label>
                  <select
                    name="airport_charges"
                    id="airport_charges"
                    onChange={handleChange}
                    value={data.airport_charges}
                  >
                    <option value='Paid By the Customer If applicable'>Paid By the Customer If applicable</option>
                    <option value='N/A'>N/A</option>
                  </select>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor='toll_tax'>Toll Tax</label>
                  <select name="toll_tax" id="toll_tax" onChange={handleChange} value={data.toll_tax}>
                    <option value='Paid By the Customer If applicable'>Paid By the Customer If applicable</option>
                    <option value='N/A'>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='driver_allowance'>Driver Allowance</label>
                  <select name="driver_allowance" id="driver_allowance" onChange={handleChange} value={data.driver_allowance}>
                    <option value='Paid By Customer'>Paid By Customer</option>
                    <option value='N/A'>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor='border_tax'>Border Tax</label>
                  <select name="border_tax" id="border_tax" onChange={handleChange} value={data.border_tax}>
                    <option value='If Applicable'>If Applicable</option>
                    <option value='N/A'>N/A</option>
                  </select>
                </div>
              </div>

              <div className={styles.input_box}>
                <label htmlFor='image'>Car Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
                )}
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

export default EditVehicle;
