import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    username: 'hitzvera',
    token: 'contoh token',
  }
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  }
})

export default homeSlice.reducer

