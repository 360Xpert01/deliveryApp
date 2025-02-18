import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../client";


// Async thunk to fetch all orders
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    const response = await apiClient.get("/orders");
    return response.data;
});

// Async thunk to fetch orders by location
export const fetchOrdersByLocation = createAsyncThunk("orders/fetchOrdersByLocation", async (location) => {
    const response = await apiClient.get(`/orders?location=${encodeURIComponent(location)}`);
    return response.data;
});

// Async thunk to fetch a specific order by ID
export const fetchOrderById = createAsyncThunk("orders/fetchOrderById", async (orderId) => {
    const response = await apiClient.get(`/orders/${orderId}`);
    return response.data;
});

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchOrdersByLocation.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrdersByLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrdersByLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchOrderById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrderById.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = [action.payload];
            })
            .addCase(fetchOrderById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
