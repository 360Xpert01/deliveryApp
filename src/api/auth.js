import { useMutation } from 'react-query';
import apiClient from './client';

const loginUser = async ({ email, password }) => {
  const response = await apiClient.post('/c/78fc-1522-40ed-a637', { email, password });
  return response.data;
};

export const useLogin = (options = {}) => {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      // You can store the token or user data here
      console.log('Login successful:', data);
      if (options.onSuccess) {
        options.onSuccess();
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
    ...options,
  });
};
