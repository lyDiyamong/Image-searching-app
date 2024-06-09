import React from 'react'
import { useState } from 'react'
// import AnimalShow from './components/AnimalShow'
import './index.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import ImageShow from './components/ImageShow'
import searchImages from './api'


function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) =>{
    const result = await searchImages(term) // add searchImages function to app
    setImages(result)
    console.log(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} /> 
      {/* onSubmit is a prop if we event happening it calls back to component file.
      it's likely that we assign is as a function rn */}
      <ImageList images={images} />
      {/* images is just a piece of state */}
    </div>
    
  )
}

export default App