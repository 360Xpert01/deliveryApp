// notificationAPI.js
import { useQuery } from 'react-query';
import apiClient from './client';

// Function to fetch notifications from API
const fetchNotifications = async () => {
  const response = await apiClient.get('/notifications');
  return response.data;
};

// Custom hook using React Query to fetch notifications
export const useNotifications = () => {
  return useQuery('notifications', fetchNotifications, {
    onError: (error) => {
      console.error('Failed to fetch notifications:', error);
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Optional: Avoid refetching on window focus
  });
};
