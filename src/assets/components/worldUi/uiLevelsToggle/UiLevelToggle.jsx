import UiWorldBtn from '../uiWorldBtn/UiWorldBtn'
import './UiLevelToggle.scss'
import React from 'react'
import { uiItems } from '../../../gltfLinks'

const UiLevelToggle = ({levelsMenuList}) => {
    console.log(levelsMenuList)
  return (
    <div className='uiLevelToggle'>
      <p style={{
          textTransform:'uppercase',
          letterSpacing:'2px',
          fontWeight:'200',
          padding:'.25rem',
          color:'rgb(204, 204, 204)',
          marginLeft:'.25rem'
        }}
      >
        levels
      </p>
      {levelsMenuList.map((item)=><div className='btns' key={item.title} onClick={item.clickFunction}><UiWorldBtn  item={item}/></div>)}
    </div>
  )
}

export default UiLevelToggle