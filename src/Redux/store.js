// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import notificationReducer from './slices/notificationSlice';
// import orderReducer from './slices/orderSlice';
// import getOrdersSlice from "./slices/orders/getOrders"

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     notifications: notificationReducer,
//     orders: orderReducer, 
//     getOrders: getOrdersSlice,
//   },
// });

// export default store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';
import orderReducer from './slices/orderSlice';
import getOrdersSlice from "./slices/orders/getOrders"
import getOrdersHistorySlice from "./slices/orders/orderHistory"
import updateStatusRiderSlice from "./slices/orders/updateOrderStatus"
import createOrdersSlice from "./slices/customer/createOrder"
import getOrdersIdSlice from "./slices/customer/orderById"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
  orders: orderReducer,
  getOrders: getOrdersSlice,
  getOrdersHistory: getOrdersHistorySlice,
  updateStatusRider: updateStatusRiderSlice,
  createOrder: createOrdersSlice,
  getOrdersId: getOrdersIdSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor
export const persistor = persistStore(store);
export default store;
