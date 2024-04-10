import {Environment, Html, OrbitControls, useVideoTexture} from "@react-three/drei";
import {Avatar} from "./Avatar";
import Background from "./Background.jsx";
import React, {Suspense, useEffect} from "react";
import Sprite from "./sprite.jsx";
import {useControls} from "leva";
import {useLoader} from "@react-three/fiber";
import * as THREE from "three"
import Gif from "./Gif.jsx"


export const Experience = () => {

    // get initial values or defaults from local storage
    const {homerheight: initialHeight} = JSON.parse(localStorage.getItem('levaState')) || {homerheight: 1};

    // leva UI controls
    const {homerheight} = useControls({homerheight: initialHeight});

    // update local storage whenever Leva control changes
    useEffect(() => {
        localStorage.setItem('levaState', JSON.stringify({homerheight}));
    }, [homerheight]);

    // texture for static beach ball image
    const balltexture = useLoader(THREE.TextureLoader, "textures/beachball.png")

    const campfiretexture = useLoader(THREE.TextureLoader, "textures/campfire.gif")

    const videoTexture = useVideoTexture("textures/earth.mp4");

    return (
        <>
            <OrbitControls enabled={true}/>

            {/* position param: [x, y, z] */}
            <Avatar position={[3, -2, 1]} scale={2}/>

            <Environment preset="sunset"/>

            <Background/>

            // static image: beach ball
            <mesh position={[-3, -2, 0.1]}>
                <planeBufferGeometry args={[1, 1]} />
                <meshBasicMaterial attach="material" map={balltexture} transparent={true} />
            </mesh>

            //
            <mesh>
                <meshBasicMaterial map={videoTexture} toneMapped={false} />
            </mesh>

            <Suspense fallback={null}>

                <Sprite IconPosition={[-2, 0, 0.1]} IconSize={[3, homerheight, 0]}
                        textureSrc="textures/homersprite.png"
                        SpriteDimensions={[4, 4, 10]}/>

                {/*<Sprite IconPosition={[0, -1, 0.1]} IconSize={[2, 2, 0]} textureSrc="textures/campfiresprite.jpg"*/}
                {/*        SpriteDimensions={[6, 1, 6]}/>*/}

            </Suspense>
        </>
    );
};
