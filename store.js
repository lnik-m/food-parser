import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import searchReducer from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  }
})
