import { useSnapshot } from 'valtio'
import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './ArBtn.scss'
import React from 'react'
import { state } from '../../../stateManagement/store'

const ArBtn = ({arBtnItems}) => {
  const snap=useSnapshot(state)
    // console.log(arBtnItems)
  return (
    <div 
      className='arBtn'
      style={{color: snap.arMode ? 'red' : 'rgb(37, 37, 37)'}}
    >
      <div className='btns' onClick={arBtnItems.clickFunction}><UiWorldBtn item={arBtnItems}/></div>
    </div>
  )
}

export default ArBtn