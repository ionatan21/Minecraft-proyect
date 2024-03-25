import { useStore } from "../hooks/UseStore";
import { Cube } from "./Cube.jsx";

export const Cubes = () => {
  const [cubes] = useStore(state => [state.cubes]);

  return cubes.map(({ id, pos, texture }) => {
    return <Cube key={id} position={pos} texture={texture} />;
  });
};