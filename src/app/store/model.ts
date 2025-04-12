import { create } from "zustand/react";

type State = {
  model: string;
};
type Action = {
  updateModel: (model: State["model"]) => void;
};

const useModelStore = create<State & Action>((set) => ({
  model: "claude3.5-haiku",
  updateModel: (model) => set(() => ({ model })),
}));

export { useModelStore };
