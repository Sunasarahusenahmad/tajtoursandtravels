import React from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';

const AddReview = () => {
  return (
  <Container>
      <div className="bottom-data">
      <div className="orders">
        <div className="header">
          <i className='bx bx-receipt'></i>
          <h3>Add New Member</h3>
        </div>
        <section className={styles.container}>
          <form action="#" className={styles.form}>
            <div className={styles.column}>
              <div className={styles.input_box}>
                <label htmlFor='fname'>First Name <span className='text-red-500'>*</span></label>
                <input type="text" placeholder="John" name='fname' id='fname' />
              </div>
              <div className={styles.input_box}>
                <label htmlFor='mname'>Middle Name <span className='text-red-500'>*</span></label>
                <input type="text" placeholder="Doe" name='mname' id='mname' />
              </div>
              <div className={styles.input_box}>
                <label htmlFor='lname'>Last Name <span className='text-red-500'>*</span></label>
                <input type="text" placeholder="Smith" name='lname' id='lname' />
              </div>
            </div>

            <div className={styles.input_box}>
              <label htmlFor='nickname'>Nick Name</label>
              <input type="text" placeholder="Johnny" name='nickname' id='nickname' />
            </div>

            <div className={styles.column}>
              <div className={styles.input_box}>
                <label htmlFor='mobileNo'>Phone Number <span className='text-red-500'>*</span></label>
                <input type="text" placeholder="1234567890" name='mobileNo' id='mobileNo' />
              </div>
              <div className={styles.input_box}>
                <label htmlFor='altMobileNo'>Alter Phone Number</label>
                <input type="text" placeholder="0987654321" name='altMobileNo' id='altMobileNo' />
              </div>
              <div className={styles.input_box}>
                <label htmlFor='email'>Email Address</label>
                <input type="text" placeholder="john@example.com" name='email' id='email' />
              </div>
            </div>

            <div className={styles.input_box}>
              <label htmlFor='address'>Address</label>
              <input type="text" placeholder="123 Main St" name='address' id='address' />
            </div>
            <div className={styles.input_box}>
              <label htmlFor='aadharNo'>Aadhar Card Number</label>
              <input type="text" placeholder="1234-5678-9012" name='aadharNo' id='aadharNo' />
            </div>

            <div className={styles.column}>
              <div className={styles.input_box}>
                <label htmlFor='backAcNo'>Bank Account Number</label>
                <input type="text" placeholder="123456789012" name='backAcNo' id='backAcNo' />
              </div>
              <div className={styles.input_box}>
                <label htmlFor='ifsc'>IFSC Code</label>
                <input type="text" placeholder="ABCD0123456" name='ifsc' id='ifsc' />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  </Container>
  );
}

export default AddReview;
