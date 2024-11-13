import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
