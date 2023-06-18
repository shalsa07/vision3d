import { useGLTF } from '@react-three/drei'
import React from 'react'

const GltfLoader = ({url}) => {

  
    const {scene}=useGLTF(url?.path)
    const model=scene
    model.name=url?.name
    
    useGLTF.preload(url?.path)
  
  // console.log(url?.name,url?.path)
  return (
    <primitive object={model}/>
  )
}

export default GltfLoader