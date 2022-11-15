import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',

  initialState: {
    favouritesArr: [],
  },

  reducers: {
    addFavourite: (state, action) => {
      state.favouritesArr = [action.payload, ...state.favouritesArr]

      // localStorage.setItem("favourite", JSON.stringify(state.favouritesArr))
    },
    deleteFavourite: (state, action) => {
      state.favouritesArr = [...state.favouritesArr.filter(el => el?.name!==action.payload?.name)]

      // localStorage.setItem("favourite", JSON.stringify(state.favouritesArr))
    },
  }
})

export const { addFavourite, deleteFavourite } = itemsSlice.actions

export default itemsSlice.reducer
