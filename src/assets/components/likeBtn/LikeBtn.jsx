import React from 'react'
import './LikeBtn.scss'

import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeBtn = () => {
  return (
    <div className='likeBtn'>
        <div className='likeBtn_icons'>
            <FavoriteIcon className='icons'/>
        </div>
        <p className='likeBtn_text'>like</p>
    </div>
  )
}

export default LikeBtn