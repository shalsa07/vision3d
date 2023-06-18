import React, { Suspense } from 'react'
import './ProductPage.scss'
// import World from '../World/World'
const World = React.lazy(()=>{
  return import('../World/World')
})

const ProductPage = () => {
  return (
    <div className='ProductPage'>
        <div className='worldContainer'>
          <Suspense>
            <World/>
          </Suspense>
        </div>
    </div>
  )
}

export default ProductPage