import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './slices/imagesSlice'
import currentImageReducer from './slices/currentImageSlice'

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    currentImage: currentImageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
