import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',

  initialState: {
    currentSearch: '',
    countSearch: 0,
    searchArr: [],
  },

  reducers: {
    addSearch: (state, action) => {
      state.currentSearch = action.payload
      state.countSearch += 1
      if (!state.searchArr.includes(action.payload)) {
        state.searchArr = [action.payload, ...state.searchArr]
      }
    },
  }
})

export const { addSearch } = searchSlice.actions

export default searchSlice.reducer
