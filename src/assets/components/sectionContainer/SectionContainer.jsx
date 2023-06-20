import React from 'react'
import './SectionContainer.scss'
import ImageContainer from '../imageContainer/ImageContainer'
// import { msmudenda } from '../../msMudenda'

const SectionContainer = ({item}) => {
    // console.log(item.imgs[0]?.url)
  return (
    <div className='section_container'>
        <div className='section_container_column'>    
            <ImageContainer item={item?.imgs[0]} />
        </div>
        
        <div className='section_container_column'> 
            <div className='section_container_row'> 
                <div className='section_container_container'>
                    <ImageContainer item={item?.imgs[1]} />
                </div>
                <div className='section_container_container'>
                    <ImageContainer item={item?.imgs[2]} />
                </div>
            </div>
            <div className='section_container_row'> 
                <div className='section_container_container'>
                    <ImageContainer item={item?.imgs[3]} />
                </div>
                <div className='section_container_container'>
                    <ImageContainer item={item?.imgs[4]} />
                </div>
            </div>
        </div>   
    </div>
  )
}

export default SectionContainer