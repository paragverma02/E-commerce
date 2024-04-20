import {createSlice} from '@reduxjs/toolkit'
import productData from '../productData'


const initialState = {
    cart : [],
    items:productData,
    totalQuanttity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
name:"cart",
initialState,
reducers:{}
})

export default cartSlice.reducer