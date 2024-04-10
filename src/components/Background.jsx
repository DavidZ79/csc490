import React, {useEffect, useRef} from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { useControls } from "leva";


const Background = () => {

    // leva UI controls
    const { background } = useControls( {
        background: {
            value: "first",
            options: ["first", "second"],
        },
    })

    /* import image */
    const texture = useTexture("textures/beach.jpg");

    /* viewport object */
    const viewport = useThree((state) => state.viewport);

    return (
        <mesh>
            {/* plane acting as background on which the image is placed */}
            <planeGeometry args={[viewport.width, viewport.height]} />
            {/* place image on plane */}
            <meshBasicMaterial map={texture} />

        </mesh>
    );
};

export default Background;
