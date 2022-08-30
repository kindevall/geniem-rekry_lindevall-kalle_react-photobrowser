import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { JsonData } from '../../state/slices/imagesSlice'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { IconButton } from '@mui/material'
import { AnimateComponents } from '../AnimateComponents'
import './ImageDetails.css'

export const ImageDetails = (): JSX.Element => {
  const location = useLocation()
  const imageState = location.state as JsonData
  const navigate = useNavigate()

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
      <img className='fullSize' src={imageState.url} alt={imageState.url} />
      <div>
        <Link to='/'>
          <IconButton aria-label='close' size='large'>
            <HighlightOffIcon fontSize='inherit' />
          </IconButton>
        </Link>
      </div>
    </AnimateComponents>
  )
}
