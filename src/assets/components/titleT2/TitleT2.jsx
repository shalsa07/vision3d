import React from 'react'
import './TitleT2.scss'

const TitleT2 = ({item}) => {
    // console.log(item);
  return (
    <h1 className='titleT2'>{item.title}</h1>
  )
}

export default TitleT2