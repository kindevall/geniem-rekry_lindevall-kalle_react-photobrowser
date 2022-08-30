import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch } from '../state/hooks'
import { JsonData, setImages } from '../state/slices/imagesSlice'

export const DataHandler = (): JSX.Element => {
  const dispatch = useAppDispatch()
  let limit: number = 80
  let pageNumber: number = 1

  const fetchImages = () => {
    axios
      .request({
        url: `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${pageNumber}`,
        method: 'get'
      })
      .then(res => {
        res.data.forEach((image: JsonData) => dispatch(setImages(image)))
      })
      .catch(error => alert('Something went wrong!' + '\n' + error))
  }

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
