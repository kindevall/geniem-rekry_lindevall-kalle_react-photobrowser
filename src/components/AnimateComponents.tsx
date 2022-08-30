import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children?: ReactNode
}

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 }
}

// Animates component transitions
const AnimateComponents = ({ children }: Props) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  )
}

export default AnimateComponents
