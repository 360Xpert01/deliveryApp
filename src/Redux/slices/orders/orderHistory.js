import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../service/storageService";

const initialState = {
    loading: false,
    getOrdersHistory: null,
    error: null
}

export const getOrdersHistory = createAsyncThunk(
    'client/getOrdersHistory',
    async ({token}) => {
        // const token = await getToken();
        console.log("asdsadffgsdg",token)
        try {
            // const response = await axios.get(`${baseUrl}/v1/deliveries`)
            const response = await axios.get(`${baseUrl}/v1/deliveries`, {
                headers: {

                    Authorization: `Bearer ${token}`,
                    "Content-Type":"application/json",
                }
            });
            return response.data
        } catch (error) {
            console.log("order Api",`${baseUrl}/v1/deliveries`)
            console.error("ERROR CATCH ORDERSs Error:", error.response?.data || error.message);
            // return rejectWithValue(error.response?.data || error.message);
            return []
        }
    }
)



const getOrdersHistorySlice = createSlice({
    name: 'getOrdersHistory',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getOrdersHistory.pending, (state) => {
                state.loading = true;
                state.error = null

            }
            ).addCase(getOrdersHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.getOrders = action.payload
                state.error = null
            }
            ).addCase(getOrdersHistory.rejected, (state, action) => {
                state.loading  = false;
                state.error =  action.error;
            })
    }

})


export default getOrdersHistorySlice.reducer;