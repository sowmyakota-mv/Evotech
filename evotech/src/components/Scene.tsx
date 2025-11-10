import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  animationIndex: number;
}

function Model({ animationIndex }:SceneProps) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF("/ai_kitchen__just_a_bit_fun/scene.gltf") as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const action = useRef<THREE.AnimationAction | null>(null);

  // Load and play the robot’s walking animation
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      action.current = mixer.current.clipAction(animations[0]);
      action.current.play();
    }
  }, [animations, scene]);

  // 🎯 Define unique target position + rotation for each title
  const target = useRef({
    x: -2,
    y: -8.0,
    z: -8,
    rotY: 0,
  });

  // Base positions for each section/title
  const positions = [
    { x: -2, y: -8.0, z: -8, rotY: 0 },             // Title 1
    { x: 0.5, y: -8.0, z: -8, rotY: Math.PI / 6 },  // Title 2
    { x: -1.5, y: -8.0, z: -8, rotY: -Math.PI / 6 } // Title 3
  ];

  // Update target when animationIndex changes
  useEffect(() => {
    const newPos = positions[animationIndex % positions.length];
    target.current = newPos;
    }, [animationIndex]);

//     // Instantly reset to starting point before smooth transition
//     if (group.current) {
//       group.current.position.set(newPos.x, newPos.y, newPos.z);
//       group.current.rotation.y = newPos.rotY;
//     }
//   }, [animationIndex]);

  // Smooth motion frame-by-frame
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
    if (!group.current) return;

    // Interpolate to make movements smooth
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      target.current.x,
      delta * 0.5 // adjust for speed
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      target.current.rotY,
      delta * 1.2
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={6} />
    </group>
  );
}

export default function Scene({ animationIndex }:SceneProps) {
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
