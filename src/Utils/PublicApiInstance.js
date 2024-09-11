import axios from 'axios';

const PublicApiInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true, 
});

PublicApiInstance.interceptors.request.use(
  (config) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (apiKey) {
      config.headers['taj-api-key'] = apiKey;
    }
    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default PublicApiInstance;
