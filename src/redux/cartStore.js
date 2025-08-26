import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice"
import wishlistSlice from "./Slice/whislistSlice"



const CartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice
    }
}
)
export default CartStore