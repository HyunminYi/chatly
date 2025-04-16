import { create } from "zustand/react";

type State = {
  toggle: boolean;
};
type Action = {
  updateToggle: (payload: State["toggle"]) => void;
};

const useToggleStore = create<State & Action>((set) => ({
  toggle: false,
  updateToggle: (toggle) =>
    set(() => ({
      toggle,
    })),
}));

export { useToggleStore };
