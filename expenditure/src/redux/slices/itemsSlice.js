import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setNewItem(state, action){
      state.push(action.payload)
    },
  },
})

export const { setNewItem } = itemsSlice.actions

export default itemsSlice.reducer