import { createSlice ,createAsyncThunk,AsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import type { RootState } from '../store'
import {MyPizza} from '../../interface/pizza'

// export const fetchPizzas:  = createAsyncThunk(
//     'pizza/fetchPizzasStatus',
//     async () => {
//         const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/items?&page=${currentPage}&limit=8&${category}&${search}`)
//       return data
//     }
//   )


interface pizzaSliceState {
items:MyPizza[],
status: "loading" | "success" | "error"
}


const initialState: pizzaSliceState = {
 items:[],
 status:"loading"
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  setItems(state,action:PayloadAction<MyPizza[]>){
    state.items = action.payload
  }
  }
})

export const { setItems} = pizzasSlice.actions


export const selectPizzaData = (state: RootState) => state.pizza

export default pizzasSlice.reducer

