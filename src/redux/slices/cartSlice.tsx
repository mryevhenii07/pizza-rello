import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import  { RootState } from '../store'

import {MyPizza} from '../../interface/pizza'

interface filterState {
    totalPrice: number,
    items:MyPizza[]
}

const initialState: filterState = {
    totalPrice: 0,
    items:[]

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
addItem(state,action){
   const findItem = state.items.find((obj) => obj.id === action.payload.id )

   if(findItem?.count){
    findItem.count ++;
   } else{ 
    state.items.push({...action.payload,count:1})}

    state.totalPrice = state.items.reduce((sum:number,obj) => {
        return obj.price * (obj.count || 0) + sum
    },0)
},
decrementItem(state,action){
    const findItem = state.items.find((obj) => obj.id === action.payload)
    if(findItem?.count){
        findItem.count--
    }
},
removeItem(state,action){
    state.items = state.items.filter((obj) => obj.id !== action.payload)
},
clearItems(state){
    state.items = []
    state.totalPrice = 0
},

  }
})

export const {removeItem ,addItem,decrementItem,clearItems} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id:string) => (state:RootState) => state.cart.items.find((obj) => obj.id === id)

export default cartSlice.reducer

