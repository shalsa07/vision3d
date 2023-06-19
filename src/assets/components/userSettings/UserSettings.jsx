import React from 'react'
import './UserSettings.scss'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserSettings = () => {
  return (
    <div className='userSettings'>
        <div className='userSettings_menu'>
            <MenuOutlinedIcon className='icons'/>
        </div>
        <AccountCircleIcon className='icon_userSettings'/>
    </div>
  )
}

export default UserSettings