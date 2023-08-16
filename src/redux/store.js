import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import wishSlice from "./slices/wish-slice"; 
export const store  = configureStore({
    reducer:{
        products: productsSlice, 
        cart : cartSlice ,
        wish : wishSlice,
    }
})