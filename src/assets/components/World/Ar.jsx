import { ARButton, XR } from '@react-three/xr'
import React, { Suspense } from 'react'
import World from './World'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Environment } from '@react-three/drei'
import { enviHdriMap } from '../../gltfLinks'
import { useSnapshot } from 'valtio'
import { state } from '../../stateManagement/store'

// import ObjModels from './ObjModels'
const ObjModels=React.lazy(()=>{
  return import('./ObjModels')
})

const Ar = () => {
  const snap=useSnapshot(state)
  return (
      <>
        <ARButton
          style={{
            color: snap.arMode ? 'red' : 'rgb(37, 37, 37)',
            position:'absolute',
            left:'0',right:'0',
            bottom:snap.arBtnOffset,
            margin: '0 auto',
            width:'60px',
            height:'40px',
            // borderRadius:'.5rem',
            zIndex:'10'
          }}
        />
        <Canvas>
            <Suspense>
            <XR>
                <ambientLight intensity={1}/>

                <Environment files={enviHdriMap}/>

                <Suspense><ObjModels/></Suspense>
            </XR>
            </Suspense>
        </Canvas>
      </>

  )
}

export default Ar