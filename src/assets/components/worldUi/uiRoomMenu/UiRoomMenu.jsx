import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './UiRoomMenu.scss'
import React from 'react'
import { uiItems } from '../../../gltfLinks'

const UiRoomMenu = ({roomMenuList}) => {
    console.log(roomMenuList)
  return (
    <div className='uiRoomMenu'>
      <p style={{
        textTransform:'uppercase',
        letterSpacing:'2px',
        fontWeight:'200',
        padding:'.25rem',
        color:'rgb(204, 204, 204)',
        marginLeft:'.25rem'}
      }>exterior</p>
        {roomMenuList.ext.map((item)=><div className='btns' key={item.title} onClick={item.clickFunction}><UiWorldBtn  item={item}/></div>)}
      <p style={{textTransform:'uppercase',letterSpacing:'2px',fontWeight:'200',padding:'0 .25rem',color:'rgb(204, 204, 204)'}}>interior</p>
        {roomMenuList.int.map((item)=><div className='btns' key={item.title} onClick={item.clickFunction}><UiWorldBtn  item={item}/></div>)}
    </div>
  )
}

export default UiRoomMenu