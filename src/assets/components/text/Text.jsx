import React from 'react'
import './Text.scss'
import { fontSize } from '@mui/system'

const Text = ({item}) => {
    // console.log(item);
  return (
    <p style={{
      fontSize:`${item?.fontSize}`,
      fontWeight:`${item?.fontWeight}`,
      paddingLeft:`${item?.paddingLeft}`
    }} className='text'>{item.title}</p>
  )
}

export default Text