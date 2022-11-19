import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import searchReducer from './slices/searchSlice'
import itemsReducer from './slices/itemsSlice'
import countReducer from './slices/countSearchSlice'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    items: itemsReducer,
    search: searchReducer
  })
)

export const store = configureStore({
  reducer: {
    saved: persistedReducer,
    count: countReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
