import React, { useEffect, useState } from 'react';
import styles from '../../../assets/css/form.module.css';
import Container from '../../../Layouts/admin/Container';
import { useNavigate, useParams } from 'react-router-dom';
import PrivateApiInstance from '../../../Utils/PrivateApiInstance';
import Editor from '../../../Components/admin/Editor';
import { toast } from 'react-toastify';

const EditBlog = () => {
  const { id } = useParams(); // Fetch the blog ID from URL parameters
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: '',
    content: '',
    thumnail: null,
    images: [],
  });
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PrivateApiInstance.get(`/blog/${id}`);
        const blogData = response.data.data;

        setData({
          title: blogData.title,
          content: blogData.content,
          thumnail: null, 
          images: [], 
        });

        // Set existing thumbnail preview
        setThumbnailPreview(`${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${blogData.thumnail}`);

        // Set existing image previews
        const existingImagePreviews = blogData.images.map((image) => `${process.env.REACT_APP_SERVER_URL_FOR_MEDIA}/${image}`);
        setImagePreviews(existingImagePreviews);
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

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, thumnail: file });

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);
    }
  };

  const handleMultipleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setData({ ...data, images: files });

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previewUrls);
  };

  const handleContentChange = (value) => {
    setData({ ...data, content: value });
  };

  const saveData = async (e) => {
    e.preventDefault();

    if (data.title === '' || data.content === '' || (!data.thumnail && !thumbnailPreview)) {
      toast.error('Please fill all the fields');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.thumnail) formData.append('thumnail', data.thumnail);

    data.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await PrivateApiInstance.put(`/blog/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      navigate('/admin/blog');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt"></i>
            <h3>Edit Blog</h3>
          </div>
          <section className={styles.container}>
            <form className={styles.form} encType="multipart/form-data">
              {/* Title Input */}
              <div className={styles.input_box}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Enter title..."
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={data.title}
                />
              </div>

              {/* Content Input (Rich Text Editor) */}
              <div className={styles.input_box}>
                <label htmlFor="content">Content</label>
                <Editor value={data.content} onChange={handleContentChange} placeholder="Write your blog content here..." />
              </div>

              {/* Thumbnail Input */}
              <div className={styles.input_box}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input type="file" name="thumbnail" id="thumbnail" onChange={handleThumbnailChange} />
                {thumbnailPreview && (
                  <div className={styles.imagePreview}>
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      style={{ width: '30%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
                    />
                  </div>
                )}
              </div>

              {/* Multiple Images Input */}
              <div className={styles.input_box}>
                <label htmlFor="images">Images</label>
                <input type="file" name="images" id="images" onChange={handleMultipleImagesChange} multiple />
                {imagePreviews.length > 0 && (
                  <div className={styles.imagePreviews}>
                    {imagePreviews.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Preview ${index}`}
                        style={{
                          width: '30%',
                          height: 'auto',
                          borderRadius: '8px',
                          marginTop: '10px',
                          marginRight: '10px',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" disabled={loading} onClick={saveData}>
                Save Changes
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default EditBlog;
