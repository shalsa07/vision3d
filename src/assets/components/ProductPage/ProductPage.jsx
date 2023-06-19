import React, { Suspense } from 'react'
import './ProductPage.scss'
import NavBar from '../navBar/NavBar'
import Product from '../product/Product'
import { useSnapshot } from 'valtio'
import { state } from '../../stateManagement/store'

// import World from '../World/World'
const World = React.lazy(()=>{
  return import('../World/World')
})

const ProductPage = () => {
  const snap=useSnapshot(state)
  return (
    <div className='ProductPage'>
        <div className='worldContainer'>
          <NavBar/>
          {snap.arMode ? 
            <div className='arMode'>
              <Suspense><World/></Suspense>
            </div> 
            : <Product/>
          }
        </div>
    </div>
  )
}

export default ProductPage