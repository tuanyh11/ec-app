import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ALLPRODUCTS } from '../../Queries';
import API from '../../api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (data, { rejectWithValue }) => {
    try {
      const productRes = await API.post(
        'https://72.arrowhitech.net/tn3/test_an/wordpress/graphql',
        {
          query: GET_ALLPRODUCTS,
        }
      );
      const products = productRes.data.data.products.nodes;
      return products;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  products: [],
  isPending: false,
  error: null,
  success: false,
  productsFilter: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductByCate(state, action) {
        state.productsFilter = state.products.filter(product => product.productCategories.nodes.some(category => category.name === action.payload))
    }
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.isPending = true;
    },

    [fetchAllProducts.rejected]: (state, actions) => {
      state.isPending = false;
      state.error = actions.payload.errorMessage;
    },

    [fetchAllProducts.fulfilled]: (state, actions) => {
      state.isPending = false;
      state.products = actions.payload;
      state.success = true;
    },
  },
});


export const {filterProductByCate} = productsSlice.actions
export default productsSlice.reducer;
