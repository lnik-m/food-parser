import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice'
import itemsReducer from './slices/itemsSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    items: itemsReducer,
  }
})
