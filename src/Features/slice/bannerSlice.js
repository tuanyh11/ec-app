import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ALLBANNERS, GET_DISCOUNTBANNERS } from '../../Queries';
import API from '../../api';

export const fetchAllBanner = createAsyncThunk(
  'banner/fetchAllBanner',
  async (data, { rejectWithValue }) => {
    try {
      const bannersRes = await API.post(
        'https://72.arrowhitech.net/tn3/test_an/wordpress/graphql',
        {
          query: GET_ALLBANNERS,
        }
      );

      const banners = bannersRes.data.data.allBanner.nodes.map((item) => {
        return { ...item.banner };
      });

      return banners;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const fetchAllDiscountBanner = createAsyncThunk(
  'banner/fetchAllDiscountBanner',
  async (data, { rejectWithValue }) => {
    try {
      const discountBannerRes = await API.post(
        'https://72.arrowhitech.net/tn3/test_an/wordpress/graphql',
        {
          query: GET_DISCOUNTBANNERS,
        }
      );

      const discountBanner =
        discountBannerRes.data.data.allDiscountBanner.nodes.map((item) => ({
          id: item.id,
          ...item.discountBanner,
        }));

      return discountBanner;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  banner: [],
  discountBanner: [],
  isPending: false,
  error: null,
  success: false,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  extraReducers: {
    [fetchAllBanner.pending]: (state) => {
      state.isPending = true;
    },

    [fetchAllBanner.rejected]: (state, actions) => {
      state.error = actions.payload.errorMessage;
      state.isPending = false;
    },

    [fetchAllBanner.fulfilled]: (state, actions) => {
      state.banner = actions.payload;
    },

    [fetchAllDiscountBanner.fulfilled]: (state, actions) => {
      state.discountBanner = actions.payload;
      state.isPending = false;
    },
  },
});

export default bannerSlice.reducer;
