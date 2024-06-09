import React from 'react'
import '../index.css'
import { useState } from 'react'

import bird from '../assets/images/svg/bird.svg'
import cat from  '../assets/images/svg/cat.svg'
import cow from '../assets/images/svg/cow.svg'
import dog from '../assets/images/svg/dog.svg'
import gator from '../assets/images/svg/gator.svg'
import heart from '../assets/images/svg/heart.svg'
import horse from '../assets/images/svg/horse.svg'

const svgMap = {
  bird ,// assign as key and value at the same time
  cat ,
  cow, 
  dog,  
  gator, 
  horse, 
}

function AnimalShow({type}) {
  const [clicks, setClicks] = useState(0) // click start off as 0
  const handleClick = () => {
    setClicks(clicks + 1)
  }
  return ( // call key to get value 
    <div className='animal-show relative p-3 border border-gray-300 rounded-xl' onClick={handleClick}>
      <img className='animal size-[400px]' src={svgMap[type]} alt="animal" />
      <img className='heart absolute right-[10%] bottom-[10%]'
        src={heart}
        alt="heart" 
        style={{ width : 10 + 10 * clicks + 'px'}}
      />
    </div>
  )
}

export default AnimalShow