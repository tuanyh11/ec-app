import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../api'


export const fetchAllAttributes = createAsyncThunk('attributies/fetchAllAttributes', async (ata, {rejectWithValue}) => {
  try {
    const attributesRes = await API.get('https://72.arrowhitech.net/tn3/test_an/wordpress/wp-json/wc/v3/products/attributes')
    const attributes = await Promise.all(attributesRes.data.map( async (item) => {
      const terms = await API.get(`https://72.arrowhitech.net/tn3/test_an/wordpress/wp-json/wc/v3/products/attributes/${item.id}/terms?order=asc&&per_page=100`)
      return {...item, attributes: terms.data}
    }))
    return attributes.reverse()
    } catch (error) {
       return rejectWithValue(error?.response?.data)
    }
})

const initialState = {
    attributes: [],
    isPending: false,
    success: false,
    error: null,
}



const attributesSlice = createSlice({
    name: 'atribute',
    initialState,
    extraReducers: {
        [fetchAllAttributes.pending]: (state) => {
          state.isPending = true
        },

        [fetchAllAttributes.rejected]: (state, action) => {
          state.error = action.payload.errorMessage
          state.isPending = false;
        },

        [fetchAllAttributes.fulfilled]: (state, action) => {
          state.attributes = action.payload
          state.isPending = false;
          state.success = true;
        }

    }

})

export default attributesSlice.reducer