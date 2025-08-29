import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice"
import wishlistSlice from "./Slice/whislistSlice"
import cartSlice from "./Slice/cartSlice"




const CartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
}
)
export default CartStore