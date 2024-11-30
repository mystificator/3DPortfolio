import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { a, useSpring } from "@react-spring/three";

import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile, isTouched }) => {
    const computer = useGLTF("models/desktop_pc/scene.gltf");

    // Spring animation for the scale effect
    const { scale } = useSpring({
        scale: isTouched ? 1.1 : 1, // Increase scale on touch
        config: { tension: 300, friction: 10 },
    });

    return (
        <a.mesh scale={scale}>
            <hemisphereLight intensity={3} groundColor='purple' />
            <pointLight intensity={2} />
            <spotLight
                position={[-10, 2, -8]}
                angle={0.12}
                penumbra={2.5}
                intensity={10}
                castShadow
                shadow-mapSize={1024}
                color='purple'
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.38 : 0.75}
                position={isMobile ? [-6.5, -2, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </a.mesh>
    );
};


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    // State to track touch
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);


    // Handle touch events for drag-to-rotate
    // Handle touch events for scale effect
    const handleTouchStart = () => {
        setIsTouched(true); // Trigger the pop effect
    };

    const handleTouchEnd = () => {
        setIsTouched(false); // Reset the scale
    };


    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}

            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <Suspense fallback={<CanvasLoader />}>
                // Turn off orbit control in mobile
                {!isMobile && (
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                )}
                <Computers isMobile={isMobile} isTouched={isTouched} />
            </Suspense>

            <Preload all />
        </Canvas >
    );
};

export default ComputersCanvas;