import {Environment, OrbitControls} from "@react-three/drei";
import {Avatar} from "./Avatar";
import Background from "./Background.jsx";
import React, {Suspense, useEffect} from "react";
import Sprite from "./sprite.jsx";
import {useControls} from "leva";

export const Experience = () => {
    // get initial values or defaults from local storage
    const {homerheight: initialHeight} = JSON.parse(localStorage.getItem('levaState')) || {homerheight: 1};

    // leva UI controls
    const {homerheight} = useControls({homerheight: initialHeight});

    // update local storage whenever Leva control changes
    useEffect(() => {
        localStorage.setItem('levaState', JSON.stringify({homerheight}));
    }, [homerheight]);

    return (
        <>
            <OrbitControls enabled={true}/>

            {/* position param: [x, y, z] */}
            <Avatar position={[0, -3, 5]} scale={2}/>

            <Environment preset="sunset"/>

            <Background/>

            <Suspense fallback={null}>

                {/* homer sprite */}
                <Sprite IconPosition={[-2, 0, 0.1]} IconSize={[3, homerheight, 0]}
                        textureSrc="textures/homersprite.png"
                        SpriteDimensions={[4, 4, 10]}/>

                {/* fire sprite (needs parameter tweaking) */}
                <Sprite IconPosition={[3, 1, 0.1]} IconSize={[2, 2, 0]} textureSrc="textures/fire.png"
                        SpriteDimensions={[8, 7, 56]}/>

                {/* megaman sprite */}
                {/*<Sprite IconPosition={[0, 0, 1]} IconSize={[1, 1, 0]} textureSrc="textures/megamansprite.jpeg" />*/}
            </Suspense>
        </>
    );
};
