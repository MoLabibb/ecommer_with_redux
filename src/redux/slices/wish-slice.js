import { createSlice } from "@reduxjs/toolkit";

const wishSlice  = createSlice({
    initialState: [],
    name: 'wishSlice', 
    reducers:{
        addToWishList: (state, action)=>{
            const exist  = state.find((product)=> product.id === action.payload.id); 
            if(!exist){
                state.push(action.payload);
            }else{
        
            }

        },
        delFromWishList: (state, action )=>{
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
        clearWish: ()=>{
            return []
        }
    }, 
})

export const {addToWishList, delFromWishList,removeItem ,clearWish} = wishSlice.actions ; 
export default wishSlice.reducer ; 
