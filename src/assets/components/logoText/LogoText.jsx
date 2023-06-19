import React from 'react'
import './LogoText.scss'

const LogoText = ({item}) => {
  return (
    <div className='logoText'>{item.text}</div>
  )
}

export default LogoText