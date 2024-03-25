import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      id: nanoid(),
      pos: [1, 1, 1],
      texture: "dirt",
    },

    {
      id: nanoid(),
      pos: [2, 2, 1],
      texture: "dirt",
    },

    {
      id: nanoid(),
      pos: [0, 0, 1],
      texture: "dirt",
    },

  ],
  addCube: () => {},
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
