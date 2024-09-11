import React, { useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import { useNavigate } from 'react-router-dom';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import { toast } from 'react-toastify';

const AddService = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        text: '',
        icon: null
    });
    const [imagePreview, setImagePreview] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData({ ...data, icon: file });

        // Create a preview URL for the selected image
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    }

    const saveData = (e) => {
        e.preventDefault();
        if(data.name === '' || data.text === '' || !data.icon) {
            toast.error('Please fill all the fields');
            return;
        }
        setLoading(true);
        
        // FormData to handle file uploads
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('text', data.text);
        formData.append('icon', data.icon);

        PrivateApiInstance.post('/service', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            console.log(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })

        navigate('/admin/service');
    }

    return (
        <Container>
            <div className="bottom-data">
                <div className="orders">
                    <div className="header">
                        <i className='bx bx-receipt'></i>
                        <h3>Add Service</h3>
                    </div>
                    <section className={styles.container}>
                        <form className={styles.form} encType='multipart/form-data' >

                            {/* name Input */}
                            <div className={styles.input_box}>
                                <label htmlFor='name'>Name</label>
                                <input type="text" placeholder="Enter name..." name='name' id='name' onChange={handleChange} value={data.name} />
                            </div>

                            {/* Textarea Example */}
                            <div className={styles.input_box}>
                                <label htmlFor='text'>Description</label>
                                <textarea placeholder="Enter description..." name='text' id='text' onChange={handleChange} value={data.text}></textarea>
                            </div>

                            {/* Image Input */}
                            <div className={styles.input_box}>
                                <label htmlFor='icon'>Icon</label>
                                <input type="file" name='icon' id='icon' onChange={handleFileChange}/>
                                {imagePreview && (
                                    <div className={styles.imagePreview}>
                                        <img src={imagePreview} alt="Selected Preview" style={{ width: '30%', height: 'auto', borderRadius: '8px', marginTop: '10px' }} />
                                    </div>
                                )}
                            </div>

                            <button type="submit" disabled={loading} onClick={saveData}>Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </Container>
    );
}

export default AddService;
