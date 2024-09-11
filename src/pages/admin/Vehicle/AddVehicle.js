import React, { useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import { useNavigate } from 'react-router-dom';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const AddVehicle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    image: '',
    ac: false,
    bags: false,
    seats: 0,
    minimum_kilometers: 0,
    night_stay: "N/A",
    parking: "N/A",
    airport_charges: "N/A",
    toll_tax: "N/A",
    driver_allowance: "N/A",
    border_tax: "N/A",
    smoking_and_drinking: "Not Allow",
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });

    // Create a preview URL for the selected image
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const saveData = (e) => {
    e.preventDefault();
    if (data.name === '' || !data.image ) {
      toast.error('Please fill all the fields');
      return;
    }
    setLoading(true);

    // FormData to handle file uploads
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('image', data.image);
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

    PrivateApiInstance.post('/vehicle', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        toast.error('Something went wrong');
        console.log(err);
        setLoading(false);
      });

    navigate('/admin/vehicle');
  };

  return (
    <Container>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt"></i>
            <h3>Add Vehicle</h3>
          </div>
          <section className={styles.container}>
            <form className={styles.form} encType="multipart/form-data">
              <div className={styles.input_box}>
                <label htmlFor="name">Car Name</label>
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
                  <label htmlFor="ac">Ac</label>
                  <select name="ac" id="ac" onChange={handleChange} value={data.ac}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="bags">Bags</label>
                  <select name="bags" id="bags" onChange={handleChange} value={data.bags}>
                    <option value={'true'}>Yes</option>
                    <option value={'false'}>No</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="smoking_and_drinking">Smoking And Drinking</label>
                  <select
                    name="smoking_and_drinking"
                    id="smoking_and_drinking"
                    onChange={handleChange}
                    value={data.smoking_and_drinking}
                  >
                    <option value={'Allow'}>Allow</option>
                    <option value={'Not Allow'}>Not Allow</option>
                  </select>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="seats">Total Seats</label>
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
                  <label htmlFor="minimum_kilometers">Minimum Kilometers</label>
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
                  <label htmlFor="night_stay">Night Stay</label>
                  <select name="night_stay" id="night_stay" onChange={handleChange} value={data.night_stay}>
                    <option value={"Yes"}>Yes</option>
                    <option value={"N/A"}>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="parking">Parking</label>
                  <select name="parking" id="parking" onChange={handleChange} value={data.parking}>
                    <option value={'Paid By the Customer If applicable'}>Paid By the Customer If applicable</option>
                    <option value={'N/A'}>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="airport_charges">Airport Charges</label>
                  <select
                    name="airport_charges"
                    id="airport_charges"
                    onChange={handleChange}
                    value={data.airport_charges}
                  >
                    <option value={'Paid By the Customer If applicable'}>Paid By the Customer If applicable</option>
                    <option value={'N/A'}>N/A</option>
                  </select>
                </div>
              </div>


              <div className={styles.column}>
                <div className={styles.input_box}>
                  <label htmlFor="toll_tax">Toll tax</label>
                  <select name="toll_tax" id="toll_tax" onChange={handleChange} value={data.toll_tax}>
                    <option value={"Paid By the Customer If applicable"}>Paid By the Customer If applicable</option>
                    <option value={"N/A"}>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="driver_allowance">Driver Allownce</label>
                  <select name="driver_allowance" id="driver_allowance" onChange={handleChange} value={data.driver_allowance}>
                    <option value={'Paid By Customer'}>Paid By Customer</option>
                    <option value={'N/A'}>N/A</option>
                  </select>
                </div>

                <div className={styles.input_box}>
                  <label htmlFor="border_tax">Border Tax</label>
                  <select
                    name="border_tax"
                    id="border_tax"
                    onChange={handleChange}
                    value={data.border_tax}
                  >
                    <option value={'If applicable'}>If applicable</option>
                    <option value={'N/A'}>N/A</option>
                  </select>
                </div>
              </div>


              {/* Image Input */}
              <div className={styles.input_box}>
                <label htmlFor="image">Car Image</label>
                <input type="file" name="image" id="image" onChange={handleFileChange} />
                {imagePreview && (
                  <div className={styles.imagePreview}>
                    <img
                      src={imagePreview}
                      alt="Selected Preview"
                      style={{ width: '30%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
                    />
                  </div>
                )}
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

export default AddVehicle;
