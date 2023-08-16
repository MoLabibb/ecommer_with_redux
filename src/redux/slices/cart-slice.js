import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    initialState: [],
    name: 'cartSlice', 
    reducers:{
        addToCart: (state, action)=>{
            const exist  = state.find((product)=> product.id === action.payload.id); 
            if(exist){
                exist.qty += 1 ; 
            }else{
                const productClone  = {...action.payload, qty: 1 }
                console.log(productClone);
                state.push(productClone); 
            }

        },
        delFromCart: (state, action )=>{
        return state.filter((product)=> product.id !== action.payload.id); 

        }, 
        removeItem : (state, action)=>{
            const exist  = state.find((product)=> product.id === action.payload.id); 
            if(exist){
                if(exist.qty > 1 ){
                    exist.qty -= 1 ;
                }else{
                    return state.filter((product)=> product.id !== action.payload.id);
                }
                
            }else{
                const productClone  = {...action.payload, qty: 1 }
                console.log(productClone);
                state.push(productClone); 
            }

        },
        clerCart: ()=>{
            return []
        }
    }, 
})

export const {addToCart, delFromCart,removeItem ,clerCart} = cartSlice.actions ; 
export default cartSlice.reducer ; 
