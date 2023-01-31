
import type { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';


const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

export const filterSlice = createSlice(
  ({
    name: 'filters',
    initialState,
    reducers: {
      setCategoryId(state, action: PayloadAction<number>) {
        state.categoryId = action.payload;
      },
      setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
      },
      setSortId(state, action: PayloadAction<Sort>) {
        state.sort = action.payload;
      },
      setCurrentCount(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
        if (Object.keys(action.payload).length) {
          state.currentPage = Number(action.payload.currentPage);
          state.categoryId = Number(action.payload.categoryId);
          state.sort = action.payload.sort;
        } else {
          state.currentPage = 1;
          state.categoryId = 0;
          state.sort = {
            name: 'популярности',
            sortProperty: SortPropertyEnum.RATING_DESC,
          };
        }
      },
    },
  }))

export const {setSearchValue, setCategoryId,setSortId ,setCurrentCount,setFilters} = filterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFilter = (state: RootState) => state.filter.categoryId

export default filterSlice.reducer


// import type { RootState } from '../store'
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { FilterSliceState, Sort, SortPropertyEnum } from './types';


// interface filterState {
//   categoryId: number,
//   currentPage:number,
//   sort:{
//     name:string
//     ,sortProperty:string},
//   searchValue:string
// }


// const initialState: filterState = {
//   categoryId: 0,
//   currentPage:1,
//   searchValue:"",
//   sort: {
//     name: 'популярности',
//     sortProperty: SortPropertyEnum.RATING_DESC,
//   },
// }

// export const filterSlice = createSlice(
//   {
//   name: 'filters',
//   initialState,
//   reducers: {
//   setCategoryId(state,action){
//     state.categoryId = action.payload 
//   },
 
//   setSort(state, action: PayloadAction<Sort>) {
//     state.sort = action.payload;
//   },
//   setCurrentCount(state,action){
//     state.currentPage = action.payload
//   },
//   setFilters(state,action){
//     state.currentPage = Number(action.payload.currentPage) 
//     state.categoryId = Number(action.payload.categoryId) 
//   },
//   setSearchValue(state, action) {
//     state.searchValue = action.payload;
//   },
//   }
// })

// export const {setSearchValue, setCategoryId,setSortId ,setCurrentCount,setFilters} = filterSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// // export const selectFilter = (state: RootState) => state.filter.categoryId

// export default filterSlice.reducer

