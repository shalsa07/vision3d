import React from 'react'
import './Text.scss'

const Text = ({item}) => {
    // console.log(item);
  return (
    <h1 className='text'>{item.title}</h1>
  )
}

export default Text