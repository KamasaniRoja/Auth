import axios from 'axios';
import { Auth } from 'aws-amplify';
import { logoutUser } from '../store/auth/store/userSlice';

const axiosConfig = axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL
});
axiosConfig.interceptors.request.use(
  async (config) => {
    const session = await Auth.currentSession();
    if (session) {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${session.idToken.jwtToken}`
        id_token: session.idToken.jwtToken,
        access_token: session.accessToken.jwtToken
      };
    } else {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        // Authorization: ''
        id_token: '',
        access_token: ''
      };
      logoutUser();
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosConfig;
