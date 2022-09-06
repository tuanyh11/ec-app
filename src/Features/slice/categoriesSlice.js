import { GET_ALLCATEGORIES, GET_DISCOUNTBANNERS, GET_ALLBANNERS } from '../../Queries';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../api'



export const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async (data, {rejectWithValue}) => {
    try {
        const categoriesRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
            query: GET_ALLCATEGORIES 
        })
  
        const categories = categoriesRes.data?.data?.productCategories?.nodes.reverse()
        return categories
    } catch (error) {
       return rejectWithValue(error?.response?.data);
    }
  })

const initialState = {
    categories: [],
    isPending: false,
    error: null,
    success: false,
    rootCategories: []
}

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [fetchAllCategories.pending]: (state) => {
          state.isPending = true
        },

        [fetchAllCategories.rejected]: (state, actions) => {
          state.error = actions.payload.errorMessage
          state.isPending = false;
        },

        [fetchAllCategories.fulfilled]: (state, actions) => {
          state.categories = actions.payload
          state.isPending = false;
          state.success = true;
          state.rootCategories = state.categories.filter(c => c.parentId === null)
        }

    }

})


export default categoriesSlice.reducer