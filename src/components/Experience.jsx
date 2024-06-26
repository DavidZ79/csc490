import {Environment, OrbitControls} from "@react-three/drei";
import {Avatar} from "./Avatar";
import Background from "./Background.jsx";
import React, {Suspense} from "react";
import Sprite from "./sprite.jsx";


export const Experience = () => {

    return (
        <>
            <OrbitControls enabled={true}/>

            /* -3 to bring avatar closer to camera */
            <Avatar position={[0, -3, 5]} scale={2}/>

            /* lights */
            <Environment preset="sunset"/>
            <Background />
            {/*<Cube position={[0, -3, 5]} size={[1, 1, 1]} color={"orange"}/>*/}

            {/*<Suspense fallback={null}>*/}
            {/*    <Sprite*/}
            {/*        IconPosition={[0, 0, 3]}*/}
            {/*        IconSize={[2, 2, 0.05]}*/}
            {/*        textureSrc="textures/homersprite.png"*/}
            {/*    />*/}
            {/*</Suspense>*/}

            {/*<Sprite2 />*/}

            <Suspense fallback={null}>
                <Sprite IconPosition={[-2, 0, 0.1]} IconSize={[3, 3, 0]}
                        textureSrc="textures/homersprite.png"
                tilesHorizontally={4} tilesVertically={4} totalTiles={10}/>
                <Sprite IconPosition={[3, 1, 0.1]} IconSize={[2, 2, 0]} textureSrc="textures/fire.png"
                tilesHorizontally={8} tilesVertically={7} totalTiles={56}/>
                {/*<Sprite IconPosition={[0, 0, 1]} IconSize={[1, 1, 0]} textureSrc="textures/megamansprite.jpeg" />*/}
            </Suspense>

        </>
    );
};
