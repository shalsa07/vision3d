import React from 'react'
import './ProductPage.scss'
import World from '../World/World'
import Ar from '../World/Ar'

const ProductPage = () => {
  return (
    <div className='ProductPage'>
        <div className='worldContainer'>
          <World/>
        </div>
    </div>
  )
}

export default ProductPage