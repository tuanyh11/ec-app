import { GET_ALLPRODUCTS, GET_ALLCATEGORIES, GET_DISCOUNTBANNERS, GET_ALLBANNERS } from '../../Queries';
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
        rejectWithValue(error?.response?.data)
    }
})

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (data, {rejectWithValue}) => {
    try {
        const productRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
            query:  GET_ALLPRODUCTS
         })
        const products = productRes.data.data.products.nodes
        return products
    } catch (error) {
        rejectWithValue(error?.response?.data)
    }
})


export const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async (data, {rejectWithValue}) => {
  try {
      const categoriesRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
          query: GET_ALLCATEGORIES 
      })

      const categories = categoriesRes.data?.data?.productCategories?.nodes.reverse()
      return categories
  } catch (error) {
      rejectWithValue(error?.response?.data);
  }
})



export const fetchAllDiscountBanner= createAsyncThunk('discountbanner/fetchAllDiscountBanner', async (data, {rejectWithValue}) => {
  try {
    const discountBannerRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
      query: GET_DISCOUNTBANNERS
    })

    const discountBanner = discountBannerRes.data.data.allDiscountBanner.nodes.map(item => ({id:item.id, ...item.discountBanner}))

    return discountBanner
  } catch (error) {
      rejectWithValue(error?.response?.data);
  }
})

export const fetchAllBanner = createAsyncThunk('banner/fetchAllBanner', async (data, {rejectWithValue}) => {
  try {
    const bannersRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
      query: GET_ALLBANNERS 
    })

    const banners = bannersRes.data.data.allBanner.nodes.map(item => {
     return {...item.banner}
    })

    return banners
  } catch (error) {
      rejectWithValue(error?.response?.data);
  }
})

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
      rejectWithValue(error?.response?.data);
  }
})


const initialState = {
    products: [],
    categories: [],
    isPending: false,
    isRejected: false,
    discountBanner: [],
    banner: [],
    lastestReviews: [],
    error: '',
    filter: '',
    attributes: [],
    mainCategories: [],
}

const homedataSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setFliterCategories(state, action) {
        state.filter = action.payload
      }
    },
    extraReducers: {
        [fetchAllAttributes.pending]: (state) => {
          state.isPending = true
        },

        [fetchAllProducts.rejected]: (state, actions) => {
          state.isPending = false
          state.error = actions.payload.errorMessage
        },

        [fetchAllProducts.fulfilled]: (state, actions) => {
          state.isPending = false
          state.products = actions.payload
        },

        [fetchAllCategories.fulfilled]: (state, actions) => {
          state.isPending = false
          state.categories = actions.payload
          state.mainCategories = actions.payload.filter(item => item.parentId === null)
          state.filter = actions.payload[0].name
        },

        [fetchAllDiscountBanner.fulfilled]: (state, actions) => {
          state.isPending = false
          state.discountBanner = actions.payload
        },

        [fetchAllBanner.fulfilled]: (state, actions) => {
          state.isPending = false
          state.banner = actions.payload
        },

        [fetchLasetReviews.fulfilled]: (state, actions) => {
          state.isPending = false
          state.lastestReviews = actions.payload
        },

        [fetchAllAttributes.fulfilled]: (state, actions) => {
          state.attributes = actions.payload
        }

    }

})


export const {setFliterCategories} = homedataSlice.actions
export default homedataSlice.reducer