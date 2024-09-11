import {jwtDecode} from 'jwt-decode';

const DecodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

export default DecodeToken;
