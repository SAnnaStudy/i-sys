import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: "All",
  sortType: 0,
  priceCategory: "All", 
  dateCategoryId: 0
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload
    },
    setPriceCategory(state, action){
      state.priceCategory = action.payload
    },
    setDateCategoryId(state, action){
      state.dateCategoryId = action.payload
    },
    setSortType(state, action){
      state.sortType = action.payload
    },
  },
})

export const { setCategoryId, setPriceCategory, setDateCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer