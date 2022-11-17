import { createSlice } from '@reduxjs/toolkit'

export const countSearchSlice = createSlice({
  name: 'countSearch',

  initialState: {
    countSearch: 0
  },

  reducers: {
    countSearch: state => {
      state.countSearch += 1
    },
    restartSearch: state => {
      state.countSearch = 0
    }
  }
})

export const { countSearch, restartSearch } = countSearchSlice.actions

export default countSearchSlice.reducer
