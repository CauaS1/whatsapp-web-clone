import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:5500'
});

export default api;