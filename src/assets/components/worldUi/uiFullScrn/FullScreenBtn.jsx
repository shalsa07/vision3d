import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './FullScreenBtn.scss'
import React from 'react'

const FullScreenBtn = ({fullScrnItems}) => {
    // console.log(fullScrnItems)
  return (
    <div className='fullScreenBtn'>
      <div className='btns' onClick={fullScrnItems.clickfunction}><UiWorldBtn item={fullScrnItems}/></div>
    </div>
  )
}

export default FullScreenBtn