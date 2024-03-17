import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // rotate to align with the ground X Y Z
    position: [0, -0.5, 0], //  set initial position of the ground
  }));

  groundTexture.repeat.set(100, 100);
  return (
    <mesh ref={ref}>
      <planeGeometry attach={"geometry"} args={[100, 100]} />
      <meshStandardMaterial attach={"material"} map={groundTexture} />
    </mesh>
  );
}
