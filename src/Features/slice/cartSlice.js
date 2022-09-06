import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import currency from 'currency.js'

const addASyncToCart = createAsyncThunk('addASyncToCart', async (data, {rejectWithValue}) => {
    try {
        const carts = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/wp-json/wc/store/v1/cart/add-item', {

        })
    } catch (error) {
       return rejectWithValue(error.data.message)
    }
})

const initialState = {
    cartItems: [],
    totalAmount: 0,
    isOpenLayer: false,
    isPending: false,
    isRejected: false,
    newItem: {},
    showConfirm: null,
}
const getTotalAmount = (state, action) => {
    state.totalAmount = currency(state.cartItems.reduce((a, b) => (Number(currency(b.price).value) * Number(b.quantity)) + Number(a) , 0)).format()
}

const cartSice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleLayer(state, action) {
            state.isOpenLayer = action.payload
        },
        addToCart(state, action) {
            const exitingProduct = state.cartItems.find(item => item.id === action.payload.id)
            if(exitingProduct) 
                state.cartItems.push( {...exitingProduct, quantity: Number(exitingProduct.quantity) + action.payload.quantity})
            else state.cartItems.push(action.payload)
            state.newItem = action.payload
            getTotalAmount(state, action)
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            getTotalAmount(state, action)
            console.log(state.showConfirm)
        },

        toggleConfirm(state, action) {
            state.showConfirm = action.payload
        },
    
        handleQuantity(state, action) {
            
            state.cartItems = state.cartItems.map(product => {
                
                if(product.id === action.payload.id) {
                    product.quantity = action.payload.quantity
                    return product
                } 
                return product
            })
            getTotalAmount(state, action)
        }
    },
    extraReducers: {

    }
})

export const {toggleLayer, addToCart, removeFromCart, handleQuantity,  toggleConfirm} = cartSice.actions
export default cartSice.reducer