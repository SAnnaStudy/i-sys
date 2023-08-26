import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [
        {name: 'admin', email: 'admin', password: 12345}
    ],
    loggedInUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action){
        state.users.push(action.payload)
    },
    setCurrentUser(state, action){
        state.loggedInUser = action.payload
    },
    deleteCurrentUser(state){
        state.loggedInUser = null
    }
  },
})

export const { setUser, setCurrentUser, deleteCurrentUser } = userSlice.actions

export default userSlice.reducer