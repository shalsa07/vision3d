import React from 'react'
import './ShareBtn.scss'

import IosShareIcon from '@mui/icons-material/IosShare';

const ShareBtn = () => {
  return (
    <div className='shareBtn'>
    <div className='shareBtn_icons'>
        <IosShareIcon className='icons'/>
    </div>
    <p className='shareBtn_text'>share</p>
</div>
  )
}

export default ShareBtn