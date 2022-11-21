import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Loader, Float, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { Stats } from "@react-three/drei/core/Stats";

import MoonColor from "./color.jpeg";
import MoonNormal from "./normal.jpg";
import MoonBump from "./bump.jpg";
import Sun from "./Sun";

import { QueryClient, QueryClientProvider } from "react-query";
import Data from "../Data/Data";

const queryClient = new QueryClient();

export default function Scene() {
  function MoonData() {
    return (
      <QueryClientProvider client={queryClient}>
        <Data />
      </QueryClientProvider>
    );
  }

  function Moon() {
    const [color, normal, bump] = useLoader(TextureLoader, [
      MoonColor,
      MoonNormal,
      MoonBump,
    ]);

    return (
      <>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[5, 256, 256]} />
          <meshStandardMaterial
            map={color}
            bumpMap={bump}
            bumpScale={0.01}
            normalMap={normal}
            normalScale={0.4}
          />
        </mesh>
      </>
    );
  }

  return (
    <>
      <MoonData />
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ fov: 55, position: [-10, 4, 20] }}
      >
        <ambientLight intensity={0.05} />
        <Sun />
        <Stats className="stats" />

        <OrbitControls
          minDistance={10}
          maxDistance={35}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
        />

        <Suspense
          fallback={
            <Sphere>
              <meshBasicMaterial color="cyan" wireframe />
            </Sphere>
          }
        >
          <Float>
            <Moon />
          </Float>
        </Suspense>
      </Canvas>
      <Loader
        dataInterpolation={(p) =>
          `Loading ${p.toFixed(2)}% \n \n Drag to explore`
        }
      />
    </>
  );
}
