import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import filter from './filter/filterSlice'
import cart from './slices/cartSlice'
import pizza from './pizza/pizzasSlice'
// ...

export const store = configureStore({
  reducer: {
filter,
cart,
pizza
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();