import { useAppSelector } from '../../state/hooks'
import { JsonData } from '../../state/slices/imagesSlice'
import { Link } from 'react-router-dom'
import AnimateComponents from '../AnimateComponents'
import './ImageGrid.css'

// The main grid view of the images.
const ImageGrid = () => {
  const images = useAppSelector(state => state.images)

  return (
    <AnimateComponents>
      <div className='imgGrid'>
        {images &&
          images.map((image: JsonData, id: number) => {
            return (
              <div className='single' key={id}>
                <Link to='/imageDetails' state={image}>
                  <img src={image.thumbnailUrl} alt='' />
                </Link>
              </div>
            )
          })}
      </div>
    </AnimateComponents>
  )
}

export default ImageGrid
