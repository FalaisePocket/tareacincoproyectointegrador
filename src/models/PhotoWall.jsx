import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { DoubleSide } from "three";

export default function PhotoWall(){
    const PATH="/static/";

    const lainRef=useRef(null)
    const [lain,setLain]=useState("firstLain.jpg")
    const props = useTexture(
        {
            map:PATH+lain
        }
    )

    const handleWall=()=>{
        if(lain=="firstLain.jpg"){
            setLain("secondLain.jpg")
        }else{
            setLain("firstLain.jpg")
        }
        
    }



    return (
        <group ref={lainRef} dispose={null} onClick={handleWall} >
            
            <mesh castShadow rotation-y={Math.PI / 12} >

                <planeGeometry args={[2,3]} />
                <meshStandardMaterial {...props}  side={DoubleSide}/>

            </mesh>

        </group>

    );
}