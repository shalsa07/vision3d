import React from 'react'
import './Title.scss'

const Title = ({item}) => {
    // console.log(item);
  return (
    <h1 className='title'>{item.title}</h1>
  )
}

export default Title