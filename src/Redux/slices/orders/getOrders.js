import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, getToken } from "../../../service/storageService";

const initialState = {
    loading: false,
    getOrders: null,
    error: null
}

export const getOrders = createAsyncThunk(
    'client/getOrders',
    async () => {
        const token = await getToken();
        try {
            // const response = await axios.get(`${baseUrl}/v1/orders`)
            const response = await axios.get(`${baseUrl}/v1/orders`, {
                headers: {

                    Authorization: `Bearer ${token}`,
                    "Content-Type":"application/json",
                }
            });
            return response.data
        } catch (error) {
            console.log("order Api",`${baseUrl}/v1/orders`)
            console.error("ERROR CATCH ORDERS Error:", error.response?.data || error.message);
            // return rejectWithValue(error.response?.data || error.message);
            return []
        }
    }
)



const getOrdersSlice = createSlice({
    name: 'getOrders',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.loading = true;
                state.error = null

            }
            ).addCase(getOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.getOrders = action.payload
                state.error = null
            }
            ).addCase(getOrders.rejected, (state, action) => {
                state.loading  = false;
                state.error =  action.error;
            })
    }

})


export default getOrdersSlice.reducer;