import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Fpv } from "./components/FPV";
import { Player } from "./components/Player";
function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 50, 20]}></Sky>
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>

      <div className="Pointer"><strong>+</strong></div>
    </>
  );
}

export default App;
