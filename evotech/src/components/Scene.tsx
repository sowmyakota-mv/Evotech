import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";

function Model({ animationIndex }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/ai_kitchen__just_a_bit_fun/scene.gltf");
  const mixer = useRef();
  const action = useRef();

  // Load and play robot’s animation
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      action.current = mixer.current.clipAction(animations[0]);
      action.current.play();
    }
  }, [animations, scene]);

  // Target position for each title
  const target = useRef({ x: -2, y: -8.0, z: -8, rotY: 0 });
  const positions = [
    { x: -2, y: -8.0, z: -8, rotY: 0 },
    { x: 0.5, y: -8.0, z: -8, rotY: Math.PI / 6 },
    { x: -1.5, y: -8.0, z: -8, rotY: -Math.PI / 6 },
  ];

  // Update when index changes
  useEffect(() => {
    const newPos = positions[animationIndex % positions.length];
    target.current = newPos;
    // if (group.current) {
    //   group.current.position.set(newPos.x, newPos.y, newPos.z);
    //   group.current.rotation.y = newPos.rotY;
    // }
  }, [animationIndex]);

  // Smooth movement
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
    if (!group.current) return;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, target.current.x, delta * 0.5);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.rotY, delta * 1.2);
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={6} />
    </group>
  );
}

export default function Scene({ animationIndex }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 5], fov: 45 }}
      style={{ width: "100%", height: "400px" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Model animationIndex={animationIndex} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Preload all />
    </Canvas>
  );
}
