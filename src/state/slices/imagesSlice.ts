import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface JsonData {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const initialState: JsonData[] = []

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<JsonData>) => {
      state.push(action.payload)
    }
  }
})

export const { setImages } = imagesSlice.actions
export default imagesSlice.reducer
