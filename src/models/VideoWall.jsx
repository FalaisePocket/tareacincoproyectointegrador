import { useTexture, useVideoTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { DoubleSide, VideoTexture } from "three";

export default function VideoWall(){
    const PATH="/static/";

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const videoTexture=useVideoTexture(videoRef);

    const handleWall=()=>{
        
        
    }



    return (
        <group ref={videoRef} dispose={null} onClick={handleWall} >
            
            <mesh castShadow rotation-y={Math.PI / 12} >

                <planeGeometry args={[2,3]} />
                <meshStandardMaterial map={videoTexture} side={DoubleSide}/>

            </mesh>

        </group>

    );
}