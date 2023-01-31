import { createSlice ,createAsyncThunk,AsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import type { RootState } from '../store'

// export const fetchPizzas:  = createAsyncThunk(
//     'pizza/fetchPizzasStatus',
//     async () => {
//         const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/items?&page=${currentPage}&limit=8&${category}&${search}`)
//       return data
//     }
//   )


interface pizzasState {
items:any
}


const initialState: pizzasState = {
 items:[]
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  setItems(state,action){
    state.items = action.payload
  }
  }
})

export const { setItems} = pizzasSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter.categoryId

export default pizzasSlice.reducer

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchPizzas } from './asyncActions';
// import { Pizza, PizzaSliceState, Status } from './types';

// const initialState: PizzaSliceState = {
//   items: [],
//   status: Status.LOADING, // loading | success | error
// };

// const pizzaSlice = createSlice({
//   name: 'pizza',
//   initialState,
//   reducers: {
//     setItems(state, action: PayloadAction<Pizza[]>) {
//       state.items = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPizzas.pending, (state, action) => {
//       state.status = Status.LOADING;
//       state.items = [];
//     });

//     builder.addCase(fetchPizzas.fulfilled, (state, action) => {
//       state.items = action.payload;
//       state.status = Status.SUCCESS;
//     });

//     builder.addCase(fetchPizzas.rejected, (state, action) => {
//       state.status = Status.ERROR;
//       state.items = [];
//     });
//   },
// });

// export const { setItems } = pizzaSlice.actions;

// export default pizzaSlice.reducer;