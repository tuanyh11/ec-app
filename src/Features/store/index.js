import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {dataSlice, cartSlice} from '../slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
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
        data: dataSlice,
        persistedData: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
})



export default store
