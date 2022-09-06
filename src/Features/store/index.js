import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {reviewsSilce, cartSlice, policySlice, productsSlice, bannerSlice, attributesSlice, categoriesSlice, headerSlice} from '../slice'
import {
  persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  vision: 1,
  storage
}

const rootReducer = combineReducers({cart: cartSlice})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        attributes: attributesSlice,
        banner: bannerSlice,
        products: productsSlice,
        reviews: reviewsSilce,
        policy: policySlice,
        categories: categoriesSlice,
        persistedData: persistedReducer,
        headers: headerSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
})



export default store
