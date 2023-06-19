import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import { enviHdriMap, gltffiles } from "../../gltfLinks";
import Propgress from "./Propgress";
import { Perf } from "r3f-perf";
import PlaceHolder from "./PlaceHolder";
import { useSnapshot } from "valtio";
import { state } from "../../stateManagement/store";

// import ObjModels from "./ObjModels";
const ObjModels=React.lazy(()=>{
  return import("./ObjModels")
})

const Experience = () => {
  const snap=useSnapshot(state)
  const [a,b,c]=snap.camTarget
  
  return (
    <Canvas>
      <Suspense fallback={false ? <Html>loading...</Html> : <PlaceHolder />}>

        {false && <Perf/>}

        <ambientLight intensity={1}/>

        <Environment files={enviHdriMap}/>

        <OrbitControls 
          enablePan={false}
          minDistance={snap.minDist}
          maxDistance={snap.maxDist}
          // target={[a,b,c]}
          // target={[snap.camTarget[0],snap.camTarget[1],snap.camTarget[2]]}
        />

        <Suspense><ObjModels/></Suspense>

      </Suspense>
    </Canvas>
  );
};

export default Experience;
