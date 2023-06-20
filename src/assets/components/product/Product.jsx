import React, { Suspense, useEffect, useRef } from 'react'
import './Product.scss'
import Title from '../title/Title'
import TitleT2 from '../titleT2/TitleT2'
import Text from '../text/Text'
import TextT2 from '../textT2/TextT2' 

import LikeBtn from '../likeBtn/LikeBtn';
import ShareBtn from '../shareBtn/ShareBtn';

// import World from '../World/World'
const World = React.lazy(()=>{
    return import('../World/World')
  })

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductDescription from '../productDescription/ProductDescription'
import { msmudenda } from '../../msMudenda'

// import SectionContainer from '../sectionContainer/SectionContainer'
const SectionContainer=React.lazy(()=>{
    return import('../sectionContainer/SectionContainer')
})

const productText=msmudenda.productText

const Product = () => {
    const refRightBtn=useRef()
    const refLeftBtn=useRef()
    const refSectionWrapper=useRef()

    let indexCount=0

    useEffect(()=>{
        const leftBtn=refLeftBtn.current
        const rightBtn=refRightBtn.current
        const sectionWrapper=refSectionWrapper.current

        leftBtn.addEventListener('click',()=>{
            if(indexCount < sectionWrapper.children.length-1){
                indexCount++
            }else if(indexCount === sectionWrapper.children.length-1){
                indexCount=0
            }
            sectionWrapper.style.transform=`translate(-${indexCount * sectionWrapper.clientWidth}px)`
            console.log(indexCount,'right')
        })

        rightBtn.addEventListener('click',()=>{
            if(indexCount === 0){
                indexCount=sectionWrapper.children.length-1
            }else if(indexCount < sectionWrapper.children.length){
                indexCount--
            }
            sectionWrapper.style.transform=`translate(-${indexCount * sectionWrapper.clientWidth}px)`
            console.log(indexCount,'left')
        })

        // console.log(leftBtn,rightBtn,sectionWrapper.children.length)
    })
  return (
    <div className='product'>
        <div className='product_wrap'>
            <div className='product_titleSection'>
                <Title item={productText.projectTite}/>
                <div className='product_shareSection'>
                    <Text item={productText.desc}/>
                    <div className='product_shareSection_wrap'>
                        <ShareBtn/>
                        <LikeBtn/>
                    </div>
                </div>
            </div>

            <div className='product_interactiveSection'>
                <div ref={refRightBtn} className='product_interactiveSection_arrows right'>
                    <ArrowForwardIosIcon className='icons'/> 
                </div>
                <div ref={refLeftBtn} className='product_interactiveSection_arrows left'>
                    <ArrowForwardIosIcon className='icons'/> 
                </div>
                <div className='product_interactiveSection_wrap'>
                    <div ref={refSectionWrapper} className='product_interactiveSection_wrap_container'>
                        {msmudenda.section.map((item)=><Suspense><SectionContainer key={item.title} item={item}/></Suspense>)}
                        <div className='section_container'>
                            <Suspense><World/></Suspense>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product_descSection'>
                <ProductDescription/>
                                
                <div className='product_descSection_float'>
                    <div>
                        <Title item={productText}/>
                        <Text item={productText}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product