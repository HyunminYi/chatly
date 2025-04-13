import { create } from "zustand/react";
import { tModelName } from "@/app/components/chat/ModelSelect";

type State = {
  model: string;
};
type Action = {
  updateModel: (model: State["model"]) => void;
};

const useModelStore = create<State & Action>((set) => ({
  model: "",
  updateModel: (model) => set(() => ({ model })),
}));

export { useModelStore };
