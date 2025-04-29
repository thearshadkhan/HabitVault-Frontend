import axios from 'axios';

const API_URL = 'https://habitvault-backend.onrender.com/api/auth';

export const registerUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/register`, { email, password });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};
