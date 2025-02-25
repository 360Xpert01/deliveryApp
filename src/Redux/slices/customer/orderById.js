import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../service/storageService";

const initialState = {
    loading: false,
    getOrdersId: null,
    error: null
}

export const getOrdersId = createAsyncThunk(
    'client/getOrdersId',
    async ({id,token}) => {
        try {
            const response = await axios.get(`${baseUrl}/v1/orders/${id}`, {
                headers: {
                    
                    Authorization: `Bearer ${token}`,
                    "Content-Type":"application/json",
                }
            });
            return response.data
        } catch (error) {
            console.log("order Api",`${baseUrl}/v1/orders/${id}`)
            console.error("ERROR CATCH ORDERS Error:", error.response?.data || error.message);
            // return rejectWithValue(error.response?.data || error.message);
            return []
        }
    }
)



const getOrdersIdSlice = createSlice({
    name: 'getOrdersId',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getOrdersId.pending, (state) => {
                state.loading = true;
                state.error = null

            }
            ).addCase(getOrdersId.fulfilled, (state, action) => {
                state.loading = false;
                state.getOrdersId = action.payload
                state.error = null
            }
            ).addCase(getOrdersId.rejected, (state, action) => {
                state.loading  = false;
                state.error =  action.error;
            })
    }

})


export default getOrdersIdSlice.reducer;