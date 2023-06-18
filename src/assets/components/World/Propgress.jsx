import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Propgress = () => {
    const {progress}=useProgress()
  return (
    <Html>{progress.toFixed(2)}% loaded...</Html>
  )
}

export default Propgress