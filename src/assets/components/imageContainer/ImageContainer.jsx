import React from 'react'
import './ImageContainer.scss'

const ImageContainer = ({item}) => {
  return (
    <img className='images' src={item.url}/>
  )
}

export default ImageContainer