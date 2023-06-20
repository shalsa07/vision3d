import React from 'react'
import './Title.scss'

const Title = ({item}) => {
    // console.log(item);
  return (
    <h1 style={{fontSize:`${item?.fontSize}`}}  className='title'>{item.title}</h1>
  )
}

export default Title