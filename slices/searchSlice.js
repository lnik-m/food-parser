import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',

  initialState: {
    currentSearch: '',
    searchArr: []
  },

  reducers: {
    addSearch: (state, action) => {
      state.currentSearch = action.payload
      if (!state.searchArr.includes(action.payload)) {
        state.searchArr = [action.payload, ...state.searchArr]
      }
    }
  }
})

export const { addSearch } = searchSlice.actions

export default searchSlice.reducer
