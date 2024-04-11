import React, { useEffect, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { useControls } from "leva";

const Background = () => {
    
    // State to hold the current background option
    const [selectedBackground, setSelectedBackground] = useState("firstBackground");

    // leva UI controls
    const { background } = useControls({
        background: {
            value: "firstBackground",
            options: ["firstBackground", "secondBackground"],
        },
    });

    // useEffect to listen for changes in the background option
    useEffect(() => {
        setSelectedBackground(background);
    }, [background]);

    // Load different textures based on the selected background
    const texture = useTexture(`textures/${selectedBackground}.jpg`);

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
