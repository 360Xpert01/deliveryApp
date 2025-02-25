import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../service/storageService";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    loading: false,
    UpdateStatus: null,
    error: null
}

export const updateStatusRider = createAsyncThunk(
    'rider/updateStatusRider',
    async ({body,token},{rejectWithValue}) => {
        try {
            const response = await axios.put(`${baseUrl}/v1/update-order-status`, body,{
                headers: {

                    Authorization: `Bearer ${token}`,
                    "Content-Type":"application/json",
                }
            });
            return response.data
        } catch (error) {
            console.log("asdf",token)
            console.log("awfasadfasdc",`${baseUrl}/v1/update-order-status`)
            console.error("ERROR CATCH update status Error:", error.response?.data || error.message);
            // return rejectWithValue(error.response?.data || error.message);
            return []
        }
    }
)



const updateStatusRiderSlice = createSlice({
    name: 'updateStatusRider',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(updateStatusRider.pending, (state) => {
                state.loading = true;
                state.error = null

            }
            ).addCase(updateStatusRider.fulfilled, (state, action) => {
                state.loading = false;
                state.UpdateStatus = action.payload
                state.error = null
            }
            ).addCase(updateStatusRider.rejected, (state, action) => {
                state.loading  = false;
                state.error =  action.error;
            })
    }

})


export default updateStatusRiderSlice.reducer;