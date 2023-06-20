import React from 'react'
import './NavBar.scss'
import LogoText from '../logoText/LogoText'
import UserSettings from '../userSettings/UserSettings'
import Title from '../title/Title'
import { msmudenda } from '../../msMudenda'

const productText=msmudenda.productText

const navBarText={
    logoText:{text:'luyaridesigns'},
    productDetails:{
        title:'3 Bedroomed house',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        parapgraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea recusandae assumenda possimus quis hic dolor adipisci magni incidunt officiis sapiente ex, temporibus repellat eveniet voluptates laborum harum cupiditate porro tenetur?',
    }
}

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='navBar_container'> 
            <LogoText item={navBarText.logoText}/>
            <div className='navBar_userSettings'>
                <div className='navBar_userSettings_title'>
                    <Title item={productText.typeOfDesign}/>
                </div>
                <UserSettings/>
            </div>
        </div>
    </div>
  )
}

export default NavBar