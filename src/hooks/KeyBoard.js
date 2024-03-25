import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "turnLeft",
  KeyD: "turnRight",
  Space: "jump",
  Digit1: "dirt",
  Digit2: "grass",
  Digit3: "glass",
  Digit4: "wood",
  Digit5: "log",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    turnRight: false,
    turnLeft: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD[code];
      if (action) {
        setActions((prevActions) => ({
          ...prevActions,
          [action]: true,
        }));
      }
    };

    const handleKeyUp = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD[code];
      if (action) {
        setActions((prevActions) => ({
          ...prevActions,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};
