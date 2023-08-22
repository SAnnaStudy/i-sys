import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      category: "Other",
      date: "2023-08-19T01:41:24.207Z",
      price: 133,
      description: "Its just an example",
      id: 1
    }
  ]


export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action){
      state.push(action.payload)
    },
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer