
import type { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './interface';


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
export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort

export default filterSlice.reducer


