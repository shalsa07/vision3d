import { ARButton, XR } from '@react-three/xr'
import React, { Suspense } from 'react'
import World from './World'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Environment } from '@react-three/drei'
import ObjModels from './ObjModels'
import { enviHdriMap } from '../../gltfLinks'
import { useSnapshot } from 'valtio'
import { state } from '../../stateManagement/store'
import {ArToolKit} from 'react-three-ar'

const Ar = () => {
  const snap=useSnapshot(state)
  return (
    <Canvas>
        <Suspense>
        <XR>
            <ambientLight intensity={1}/>

            <Environment files={enviHdriMap}/>

            <ObjModels/>
        </XR>
        </Suspense>
    </Canvas>
  )
}

export default Ar