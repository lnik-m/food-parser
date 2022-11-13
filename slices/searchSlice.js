import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',

  initialState: {
    currentSearch: '',
    countSearch: 0,
  },

  reducers: {
    addSearch: (state, action) => {
      state.currentSearch = action.payload
      state.countSearch += 1
    },
  }
})

export const { addSearch } = searchSlice.actions

export default searchSlice.reducer
