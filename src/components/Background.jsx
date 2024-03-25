import React, {useRef} from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame } from "react-three-fiber";

import * as THREE from "three";


const Background = () => {

    /* import image */
    const texture = useTexture("textures/youtubeBackground.jpg");

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

    // /* import image */
    // const texture = useTexture("textures/homer.gif");
    //
    // /* viewport object */
    // const { viewport } = useThree((state) => state.viewport);
    //
    // return (
    //     <sprite position={[1, 1, -1]}>
    //         {/* Create a sprite material */}
    //         <spriteMaterial map={texture} />
    //
    //     </sprite>
    // );
};

export default Background;