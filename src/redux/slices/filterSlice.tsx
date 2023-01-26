import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface filterState {
  categoryId: number,
  currentPage:number,
  sortId:{name:string,sortProperty:string}
}


const initialState: filterState = {
  categoryId: 0,
  currentPage:1,
  sortId:{
    name:"популярності",
    sortProperty:"rating"
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
  setCategoryId(state,action){
    state.categoryId = action.payload 
  },
  setSortId(state,action){
    state.sortId = action.payload
  },
  setCurrentCount(state,action){
    state.currentPage = action.payload
  }
  },
})

export const { setCategoryId,setSortId ,setCurrentCount} = filterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter.categoryId

export default filterSlice.reducer

