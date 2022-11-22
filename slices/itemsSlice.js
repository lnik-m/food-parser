import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',

  initialState: {
    favouritesArr: []
  },

  reducers: {
    addFavourite: (state, action) => {
      state.favouritesArr = [action.payload, ...state.favouritesArr]
    },
    deleteFavourite: (state, action) => {
      state.favouritesArr = [
        ...state.favouritesArr.filter(el => el?.name !== action.payload?.name)
      ]
    },
    clearFavourite: state => {
      state.favouritesArr = []
    }
  }
})

export const { addFavourite, deleteFavourite, clearFavourite } =
  itemsSlice.actions

export default itemsSlice.reducer
