import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch } from '../state/hooks'
import { JsonData, setImages } from '../state/slices/imagesSlice'

const DataHandler = () => {
  const dispatch = useAppDispatch()

  // Limits how many images are fetched from the API with a single call.
  let limit: number = 80

  // Specifies the pagenumber for the API images: first {limit} photos, next {limit} photos and so on.
  let pageNumber: number = 1

  // Fetch images from JSONPlaceholder API.
  const fetchImages = () => {
    axios
      .request({
        url: `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${pageNumber}`,
        method: 'get'
      })
      .then(res => {
        res.data.forEach((image: JsonData) => dispatch(setImages(image)))
      })
      // Error popup
      .catch(error => alert('Something went wrong!' + '\n' + error))
  }

  // Infinite scroll - Loads more images once the user scrolls to the bottom of the page.
  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      limit = 40
      pageNumber++
      fetchImages()
    }
  }

  useEffect(() => {
    fetchImages()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return <></>
}

export default DataHandler
