import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { JsonData } from '../../state/slices/imagesSlice'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { IconButton } from '@mui/material'
import AnimateComponents from '../AnimateComponents'

// Detailed view for a single image, including the title.
const ImageDetails = () => {
  const location = useLocation()
  const imageState = location.state as JsonData
  const navigate = useNavigate()

  // Enables the user to close the image by pressing the Esc-key.
  useEffect(() => {
    function handleEscapeKey (event: KeyboardEvent) {
      if (event.code === 'Escape') {
        navigate('/')
      }
    }
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])

  return (
    <AnimateComponents>
      <h2>{imageState.title}</h2>
      <img src={imageState.url} alt={imageState.url} />
      <div>
        <Link to='/'>
          <IconButton aria-label='close' size='large'>
            <HighlightOffIcon  fontSize="inherit" />
          </IconButton>
        </Link>
      </div>
    </AnimateComponents>
  )
}

export default ImageDetails
