import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './UiWorldMenu.scss'
import React from 'react'
import { uiItems } from '../../../gltfLinks'



const UiWorldMenu = ({menuList}) => {
    // console.log(menuList)
  return (
    <div className='uiWorldMenu'>
        {menuList.map((item)=><div className='btns' key={item?.title} onClick={item?.clickFunction}><UiWorldBtn item={item}/></div>)}  
    </div>
  )
}

export default UiWorldMenu