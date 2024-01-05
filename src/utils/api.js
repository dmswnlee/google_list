import axios from 'axios';

const axiosCreate = axios.create({
   baseURL: import.meta.env.VITE_URL,
   headers: {
      'Content-Type': 'application/json',
      apikey: import.meta.env.VITE_API_KEY,
      username: 'KDT7_LeeEunJoo',
   },
});

export default axiosCreate



