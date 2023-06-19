import React, { Suspense } from 'react'
import './Product.scss'
import Title from '../title/Title'
import Text from '../text/Text'

import LikeBtn from '../likeBtn/LikeBtn';
import ShareBtn from '../shareBtn/ShareBtn';

// import World from '../World/World'
const World = React.lazy(()=>{
    return import('../World/World')
  })

const productText={
    title:'3 Bedroomed house',
    desc:{title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
    parapgraph:{title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea recusandae assumenda possimus quis hic dolor adipisci magni incidunt officiis sapiente ex, temporibus repellat eveniet voluptates laborum harum cupiditate porro tenetur?'}
}

const Product = () => {
  return (
    <div className='product'>
        <div className='product_wrap'>
            <div className='product_titleSection'>
                <Title item={productText}/>
                <div className='product_shareSection'>
                    <Text item={productText.desc}/>
                    <div className='product_shareSection_wrap'>
                        <ShareBtn/>
                        <LikeBtn/>
                    </div>
                </div>
            </div>

            <div className='product_interactiveSection'>
                {true && <Suspense><World/></Suspense>}
            </div>

            <div className='product_descSection'>
                <div className='product_descSection_writeup'>
                    <div className=''>
                        <Title item={productText}/>
                        <Text item={productText}/>
                    </div>

                    <div className=''>
                        <div>
                            <Title item={productText}/>
                            <Text item={productText}/>
                        </div>
                        <div>
                            <Title item={productText}/>
                            <Text item={productText}/>
                        </div>
                    </div>

                    <div className=''>
                        <div>
                            <Title item={productText}/>
                            <Text item={productText}/>
                        </div>
                        <div>
                            <Title item={productText}/>
                            <Text item={productText}/>
                        </div>
                    </div>
                </div>
                                
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