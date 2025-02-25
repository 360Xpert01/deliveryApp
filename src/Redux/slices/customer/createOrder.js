import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../service/storageService";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    loading: false,
    createOrders: null,
    error: null
}

export const createOrders = createAsyncThunk(
    'customer/createOrders',
    async ({body,token},{rejectWithValue}) => {
        try {
            console.log("srfgsdsdf",body)
            const response = await axios.post(`${baseUrl}/v1/create-order`, body,{
                headers: {

                    Authorization: `Bearer ${token}`,
                    "Content-Type":"application/json",
                }
            });
            return response.data
        } catch (error) {
            console.log("asdf",token)
            console.log("awfasadfasdc",`${baseUrl}/v1/create-order`)
            console.error("ERROR CATCH update status Error:", error.response?.data || error.message);
            // return rejectWithValue(error.response?.data || error.message);
            return []
        }
    }
)



const createOrdersSlice = createSlice({
    name: 'createOrders',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createOrders.pending, (state) => {
                state.loading = true;
                state.error = null

            }
            ).addCase(createOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.createOrders = action.payload
                state.error = null
            }
            ).addCase(createOrders.rejected, (state, action) => {
                state.loading  = false;
                state.error =  action.error;
            })
    }

})


export default createOrdersSlice.reducer;