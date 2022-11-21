import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Sun() {
  const ref = useRef();
  useFrame((state) => {
    const elapsed = state.clock.elapsedTime / 5;
    ref.current.position.x = 20 * Math.cos(elapsed);
    ref.current.position.z = 20 * Math.sin(elapsed);
    ref.current.position.y = 0;
  });
  return (
    <>
      <spotLight ref={ref} intensity={0.3} />
    </>
  );
}
