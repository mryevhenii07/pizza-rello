import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface filterState {
    totalPrice: number,
    items:any
 
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
    state.items.push(action.payload);
    state.totalPrice = state.items.reduce((sum:number,obj:any) => {
        return sum += obj.price
    },0)
},
removeItem(state,action){
    state.items.filter((obj:any) => obj.id !== action.payload)
},
clearItems(state,action){
    state.items = []
},

  }
})

export const {removeItem ,addItem} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFilter = (state: RootState) => state.filter.categoryId

export default cartSlice.reducer

