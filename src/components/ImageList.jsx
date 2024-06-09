import React from 'react'
import ImageShow from './ImageShow'
import '../index.css'

 // images is prop that receiving from it's parents as an array that contains sth in it
function ImageList({ images }) {
  // image as a parameter got each obj in array
  const renderImages = images.map((image) => {
    // image out is a prop give it to their children
    return <ImageShow image={image} />
  })
  return ( 
    <div className='columns-3xs'>{renderImages} </div>
  )
}

export default ImageList