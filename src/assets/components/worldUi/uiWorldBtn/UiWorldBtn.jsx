import './UiWorldBtn.scss'

import React from 'react'

const UiWorldBtn= ({item}) => {
  // console.log(item)
  return (
    <div 
      className='uiWorldBtn'
    >
      <div 
        // onClick={item?.clickfunction}
        // onClick={}
        className='uiWorldBtn_Btn_icon_container'
      >
        {item?.icon}
      </div>
      <p className='uiWorldBtn_Btn_text'>
        {item?.title}
      </p>
    </div>
  )
}

export default UiWorldBtn
