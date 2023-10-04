import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Plane, Stats } from '@react-three/drei'

import './App.css';

export default function App() {
  
  const equip = useLoader(GLTFLoader, 'equip.glb')

  return (
    <div className="canvas">
      <Canvas      
        camera={{ position: [2, 1.2, 3], fov: 70 }}
        shadows
      >
        <ambientLight 
          intensity={0.4}
        />
        <directionalLight 
          position={[2,7,5]}
          intensity={1.5}
          castShadow
        />
        <pointLight 
          position={[-2, 7, -5]} 
          intensity={1.5}
        />   
        <fog attach="fog" args={["white", 0, 25]} />
        <group>
          <ToolTip />
          <primitive
            object={equip.scene}
            position={[0, 0, 0]}
            children-0-castShadow
            recieveShadow
          />
          
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            args={[1000, 1000]}
          >
            <meshStandardMaterial attach="material" color="white" />
          </Plane>
        </group>
        <OrbitControls target={[0, 1, 0]} />
        <Stats />
      </Canvas>
    </div>
  );
}


function ToolTip() {
  return (
    <Html center position={[0, 2.8, 0]}>
      <p className="equip">PTC항온항습기</p>
    </Html>
  );
}