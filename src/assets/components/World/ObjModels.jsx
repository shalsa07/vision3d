import React, {useEffect, useRef} from 'react'
import { gltffiles } from '../../gltfLinks'
import GltfLoader from './GltfLoader'
import { Color } from 'three';
import { useThree } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { state } from '../../stateManagement/store';
import { degToRad } from 'three/src/math/MathUtils';
import { useControls } from 'leva';
// import { rotate } from 'maath/dist/declarations/src/buffer';

const ObjModels = () => {

    const snap=useSnapshot(state)

    const refWorld = useRef()
    const refGroupHouses = useRef()
    const refSupportFiles = useRef()

    const [x,y,z]=snap.roomCord
    const [a,b,c]=snap.camTarget

    const {camera}=useThree()
    camera.lookAt(a,b,c)

    let objNodels

    // const positioning=useControls({
    //   position:{value:{x:0,y:0,z:0},step:.05},
    //   camPosition:{value:{x:0,y:0,z:0},step:.05},
    //   rotate:{value:0,step:.5}
    // })

    useEffect((e)=>{
        const objs=refGroupHouses.current

        //model position section
        objs.position.set(0,0,0)

        let objNames=[]
        objs.traverse((child)=>{

            objNames.push(child.name)

            // levels section
            child.name === "house_opt1_1st" && (child.visible=snap.toggle1stFlr)
            child.name === "house_opt1_roof" && (child.visible=snap.toggleRoofFlr)
            child.name === "furn_1st001" && (child.visible=snap.toggle1stFlr)

            // color section
            child.name === "simple_Plaster_2003" && (child.material.color=new Color('#49392d'))
        })

        // console.log(objNames)
    })

    // console.log(a,b,c)

  return (
    <group ref={refWorld}
        // position={[positioning.position.x,positioning.position.y,positioning.position.z]}
        // rotation={[0,degToRad(positioning.rotate),0]}
        
        position={[x,y,z]}
        rotation={[0,degToRad(snap.roomRotation),0]}
    >
      <group ref={refGroupHouses}>
        {gltffiles.houses.map((item) => (
          <GltfLoader key={item.name} url={item} />
        ))}
      </group>
      <group ref={refSupportFiles}>
        {gltffiles.supportFiles.map((item) => (
          <GltfLoader key={item.name} url={item} />
        ))}
      </group>
    </group>
  )
}

export default ObjModels