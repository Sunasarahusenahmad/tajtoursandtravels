import React, { useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import PublicApiInstance from '../../../Utils/PublicApiInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddReview = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        reviewText: '',
        status: true
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const saveData = (e) => {
        e.preventDefault();
        console.log(data)
        if(data.name === '' || data.reviewText === '') {
            toast.error('Please fill all the fields');
            return;
        }
        setLoading(true);
        
        PublicApiInstance.post('/review', data)
        .then((res) => {
            console.log(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })

        navigate('/admin/review');
        
    }
  return (
    <Container>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className='bx bx-receipt'></i>
            <h3>Add Review</h3>
          </div>
          <section className={styles.container}>
            <form className={styles.form}>

              {/* name Input */}
              <div className={styles.input_box}>
                <label htmlFor='name'>Name</label>
                <input type="text" placeholder="Enter name..." name='name' id='name' onChange={handleChange} value={data.name} />
              </div>

              {/* Textarea Example */}
              <div className={styles.input_box}>
                <label htmlFor='reviewText'>Description</label>
                <textarea placeholder="Enter description..." name='reviewText' id='reviewText' onChange={handleChange} value={data.reviewText}></textarea>
              </div>

              {/* Status Dropdown */}
              <div className={styles.input_box}>
                <label htmlFor='status'>Status</label>
                <select name="status" id="status" onChange={handleChange} value={data.status}>
                  <option value={true}>Approved</option>
                  <option value={false}>Pending</option>
                </select>
              </div>

              <button type="submit" disabled={loading} onClick={saveData}>Submit</button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
}

export default AddReview;
