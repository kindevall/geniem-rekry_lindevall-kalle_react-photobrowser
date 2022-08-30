import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JsonData } from './imagesSlice'

const initialState: JsonData = {
  albumId: 0,
  id: 0,
  title: '',
  url: '',
  thumbnailUrl: ''
}

export const currentImageSlice = createSlice({
  name: 'currentImage',
  initialState,
  reducers: {
    setCurrentImage: (state, { payload }: PayloadAction<JsonData>) => {
      return payload
    }
  }
})

export const { setCurrentImage } = currentImageSlice.actions
export default currentImageSlice.reducer
