import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api";
import { GET_ALLPOLICY } from "../../Queries";

export const fetchAsyncAllPolicy = createAsyncThunk('fetchAsyncAllPolicy', async(data, {rejectWithValue}) => {
    try {
        const policyRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
            query: GET_ALLPOLICY
        })
         const policy = policyRes.data.data.allPolicy.nodes.map(item => ({...item.policy}))
         return policy
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const initialState = {
    policyItems: [],
    isPending: false,
    isRejected: false,
    error: null,
    success: false,
}

const policySilce = createSlice({
    name: 'policy',
    initialState,
    extraReducers: {
        [fetchAsyncAllPolicy.pending]:(state, action) => {
            state.isPending = true
        },

        [fetchAsyncAllPolicy.rejected]:(state, action) => {
            state.isPending = false
            state.error = action.payload.errorMessage
         },
        
        [fetchAsyncAllPolicy.fulfilled]:(state, action) => {
            state.isPending = false
            state.policyItems = action.payload
            state.success = true;
        }
    }
})

export default policySilce.reducer