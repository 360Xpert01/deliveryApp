import axios from 'axios';
import StorageService from '../service/storageService';

const apiClient = axios.create({
  baseURL: 'https://delivery.360xpertsolutions.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token in headers
apiClient.interceptors.request.use(
  async (config) => {
    const token = await StorageService.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
