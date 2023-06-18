import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './UiCLoseBtn.scss'
import React from 'react'
import { uiItems } from '../../../gltfLinks'

const UiCLoseBtn = ({closeBtn}) => {
    // console.log(closeBtn)
  return (
    <div 
      onClick={closeBtn?.clickFunction}
      onDoubleClick={closeBtn?.doubleclickFunction}
      className='uiCloseBtn'
    >
      <UiWorldBtn item={closeBtn}/>
    </div>
  )
}

export default UiCLoseBtn