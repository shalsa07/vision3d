import React from 'react'
import './TextT2.scss'
import { fontSize } from '@mui/system'

const TextT2 = ({item}) => {
    // console.log(item);
  return (
    <p className='textT2'>{item.title}</p>
  )
}

export default TextT2