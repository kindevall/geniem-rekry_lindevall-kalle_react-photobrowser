/**
 * React Photobrowser
 *
 * @version 1.0.1
 * @author [Kalle Lindevall] (https://github.com/kindevall)
 */

import React from 'react'
import { ImageGrid } from './components/ImageGrid/ImageGrid'
import { ImageDetails } from './components/ImageDetails/ImageDetails'
import { DataHandler } from './api/DataHandler'
import { Route, Routes } from 'react-router-dom'
import './App.css'

export const App = (): JSX.Element => {
  return (
    <div className='App'>
      <div className='topBar'>
        <h1>Geniem Rekry / React - Photobrowser / Kalle Lindevall</h1>
      </div>
      <DataHandler />
      <Routes>
        <Route path='/' element={<ImageGrid />} />
        <Route path='/imageDetails' element={<ImageDetails />} />
      </Routes>
    </div>
  )
}
