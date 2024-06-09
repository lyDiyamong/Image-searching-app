import React from 'react'
import '../index.css'


function ImageShow({ image }) {
  return (
    //testing to make sure we can get the value we want
    <div className='max-w-[300px] p-1'>
      <img className='w-full object-cover ' src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow