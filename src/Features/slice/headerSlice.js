import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../api'
import { GET_ALLPAGES } from '../../Queries'


export const fetchAsyncAllPages = createAsyncThunk('attributies/fetchAsyncAllPages', async (ata, {rejectWithValue}) => {

        try {
            const res = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
              query: GET_ALLPAGES
            })
            return res.data.data.allPages.pages
          } catch (error) {
            return rejectWithValue(error?.response?.data)
          }
})

const initialState = {
    pages: [],
    isPending: false,
    error: null,
}



const headerSlice = createSlice({
    name: 'header',
    initialState,
    extraReducers: {
        [fetchAsyncAllPages.pending]: (state) => {
          state.isPending = true
        },

        [fetchAsyncAllPages.rejected]: (state, action) => {
          state.error = action.payload.errorMessage
          state.isPending = false;
        },

        [fetchAsyncAllPages.fulfilled]: (state, action) => {
          state.pages = action.payload
          state.isPending = false;
        }

    }

})

export default headerSlice.reducer