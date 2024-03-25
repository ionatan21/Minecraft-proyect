import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Fpv } from "./components/FPV";
import { Player } from "./components/Player";
import { Cubes } from "./components/Cubes";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[1, 0.5, 1]}></Sky>
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes/>
          <Player />
          <Ground />
        </Physics>
      </Canvas>

      <div className="Pointer"><strong>+</strong></div>
    </>
  );
}

export default App;
