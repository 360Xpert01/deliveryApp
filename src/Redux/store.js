import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';
import orderReducer from './slices/orderSlice';
import getOrdersSlice from "./slices/orders/getOrders"

const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationReducer,
    orders: orderReducer, 
    getOrders: getOrdersSlice,
  },
});

export default store;
