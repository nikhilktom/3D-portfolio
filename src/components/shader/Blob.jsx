import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const Blob = ({isMobile}) => {
  const mesh = useRef();
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.2 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 0.3 : 0.1,
        0.02
      );
    }
  });

  const blobScale = isMobile ? [1, 1.7, 1] : [2, 2,2];
  const blobPosition = isMobile ?[0.8,2.3,0]: [3,3.2,0]
  return (
    <mesh
      ref={mesh}
      scale={blobScale}
      position={blobPosition}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
