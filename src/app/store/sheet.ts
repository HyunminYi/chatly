import { create } from "zustand/react";

type State = {
  open: boolean;
};
type Action = {
  setOpen: (open: State["open"]) => void;
};

const useSheetStore = create<State & Action>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}));

export { useSheetStore };
