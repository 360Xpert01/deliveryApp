import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../client';
import StorageService from '../../service/storageService';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/v1/login', { email, password });
      console.log(response);
      const token = response.data.token;

      if (token) {
        await StorageService.store('authToken', token); // Token AsyncStorage me store karo
        return { token };
      } else {
        return rejectWithValue('No token found in API response');
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      StorageService.store('authToken', null); // AsyncStorage se bhi hatao
    },
    setToken: (state, action) => {
      state.token = action.payload;
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
