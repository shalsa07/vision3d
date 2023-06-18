import React from 'react'
import GltfLoader from './GltfLoader'
import { gltffiles } from '../../gltfLinks'
import Propgress from './Propgress'
import { OrbitControls } from '@react-three/drei'

const PlaceHolder = () => {
  return (
    <>
        <Propgress/>
        <ambientLight/>
        <OrbitControls/>
        <group position={[-14,-1,6]}>
            <GltfLoader url={gltffiles.placeHolder}/>
        </group>
    </>
  )
}

export default PlaceHolder