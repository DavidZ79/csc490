import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { PlainAnimator } from "three-plain-animator/lib/plain-animator";

const Sprite = ({ textureSrc, IconPosition, IconSize }) => {
    const mesh = useRef();
    const spriteTexture = useLoader(THREE.TextureLoader, textureSrc);
    const animator = useRef(null);

    useEffect(() => {
        animator.current = new PlainAnimator(spriteTexture, 4, 4, 10, 10);
        animator.current.init();
        startAnimation();
        return () => stopAnimation();
    }, [spriteTexture]);

    const startAnimation = () => {
        const animate = () => {
            animator.current.animate();
            requestAnimationFrame(animate);
        };
        animate();
    };

    const stopAnimation = () => {
        // Stop animation or cleanup if needed
    };

    return (
        <mesh ref={mesh} position={IconPosition}>
            <boxBufferGeometry attach="geometry" args={IconSize} />
            <meshStandardMaterial attach="material" map={animator.current ? animator.current.texture : null} transparent={true} />
        </mesh>
    );
};

export default Sprite;