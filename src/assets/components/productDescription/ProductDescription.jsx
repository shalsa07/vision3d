import React from 'react'
import './ProductDescription.scss'
import TitleT2 from '../titleT2/TitleT2'
import TextT2 from '../textT2/TextT2'
import Title from '../title/Title'
import Text from '../text/Text'
import { msmudenda } from '../../msMudenda'

const productText=msmudenda.productText

const ProductDescription = () => {
  return (
    <div className='product_descSection_writeup'>
        <div className=''>
            <Title item={productText.typeOfHouse}/>
            <Text item={productText.desc}/>
        </div>

        <hr/>

        <div className='product_descSection_specs'>
            {productText.houseSpaces.map((item)=>
                <div className='product_descSection_specs_wrapper' key={item.title}>
                <TitleT2 item={item}/>
                <TextT2 item={item.specs}/>
                </div>
            )}
        </div>

        <hr/>

        <div className=''>
            <Text item={productText.parapgraph}/>
        </div>
    </div>
  )
}

export default ProductDescription