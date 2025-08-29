import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cartItem",
    initialState:[],
    reducers:{

        addTocart:(state,actionByComponent)=>{
            const existingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice =existingProduct.quantity*existingProduct.price
                const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            }
            else{
                state.push({...actionByComponent.payload,quantity:1,
                    totalPrice:actionByComponent.payload.price}
                    
                )
            }
        },
        incerementQuantity :(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice =existingProduct.quantity*existingProduct.price
            const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

        },
        removeCartItem :(state,actionByCart)=>{
             return state.filter(item=>item.id!=actionByCart.payload)
        },
        decrementQuantity : (state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity--
            existingProduct.totalPrice =existingProduct.quantity*existingProduct.price
            const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

        },
        empCart:(state)=>{
            return state=[]
        }

        }
    
})

export const {addTocart,incerementQuantity,removeCartItem,decrementQuantity,empCart} =cartSlice.actions
export default cartSlice.reducer