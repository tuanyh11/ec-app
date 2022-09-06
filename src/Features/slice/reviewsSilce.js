import { GET_ALLPRODUCTS, GET_ALLCATEGORIES, GET_DISCOUNTBANNERS, GET_ALLBANNERS } from '../../Queries';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../api'


// done

export const fetchLasetReviews = createAsyncThunk('review/fetchLasetReviews', async (data, {rejectWithValue}) => {
  try {

    const reviewsRes = await API.get('https://72.arrowhitech.net/tn3/test_an/wordpress/wp-json/wc/v3/products/reviews')
    const productsImg = reviewsRes.data.map(async item => {
      const res = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
        query: `{
          product(id: ${item.product_id}, idType: DATABASE_ID) {
            image {
              mediaItemUrl
            }
            productCategories(first: 1) {
              nodes {
                id
                name
              }
            }
          }
        }
        `
       })
       return {...item, imageProduct: res.data.data.product.image, productCategories: res.data.data.product.productCategories.nodes}
     })

    
    const test = await Promise.all(productsImg)

    return test.sort((a, b) => new Date(b.date_created) - new Date(a.date_created))

  } catch (error) {
     return rejectWithValue(error?.response?.data);
  }
})


const initialState = {
    lastestReviews: [],
    error: null,
    isPending: false,
    success: false,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,

    extraReducers: {
      [fetchLasetReviews.pending]: (state, actions) => {
        state.isPending = true;
      },

      [fetchLasetReviews.fulfilled]: (state, actions) => {
        state.isPending = false
        state.error = actions.payload
      },

      [fetchLasetReviews.fulfilled]: (state, actions) => {
        state.isPending = false
        state.lastestReviews = actions.payload
        state.success = true;
      }
    }

})


export default reviewsSlice.reducer