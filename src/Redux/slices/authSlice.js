import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../client';
import StorageService, { StoreToken } from '../../service/storageService';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('https://delivery.360xpertsolutions.com/v1/login', { email, password });

      if (response.data.success) {
        const { token, data } = response.data;

        if (token && data?.user_type) {
          await StoreToken(token);
          await StorageService.store('authToken', token); // Store token
          await StorageService.store('userType', data.user_type); // Store user type
          await StorageService.store('userData', JSON.stringify(data)); // Store full user data

          return { token, user_type: data.user_type, user: data };
        } else {
          return rejectWithValue('Invalid response: Missing token or user type');
        }
      } else {
        return rejectWithValue(response.data.message || 'Login failed');
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user_type: null, 
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user_type = null;
      state.user = null;
      StorageService.remove('authToken'); 
      StorageService.remove('userType'); 
      StorageService.remove('userData'); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user_type = action.payload.user_type; // Save user type
        state.user = action.payload.user; // Save full user data
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
