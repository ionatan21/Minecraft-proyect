import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/KeyBoard";

const RUN_SPEED = 5;
//const WALK_SPEED = 2;
const JUMP = 2 ;

export function Player() {
  const { moveBackward, moveForward, turnLeft, turnRight, jump } =
    useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 20,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => {
      pos.current = p;
    });
  }, [api.position]);

  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((p) => {
      vel.current = p;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );

    const sideVector = new Vector3(
      (turnLeft ? 1 : 0) - (turnRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(RUN_SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.04) {
        api.velocity.set(vel.current[0], JUMP ,vel.current[2]);
    }
  });

  return <mesh ref={ref} />;
}

/*        onCollide: (e) => {
            if(e.body.type === "ground"){
                api.velocity.set(0, 0, 0);
                api.position.y = e.body.position.y + 1;
            } else if(api.position.y < e.body.position.y){
                api.velocity.setY(-10);
            }
        }, */
