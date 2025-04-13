import { create } from "zustand/react";
import { tModelName } from "@/app/components/chat/ModelSelect";

type State = {
  model: string;
  modelId: string;
};
type Action = {
  updateModel: (model: State, modelId: State) => void;
};

const useModelStore = create<State & Action>((set) => ({
  model: "Claude3.5 Haiku",
  modelId: "claude-3-5-haiku-20241022",
  updateModel: (model, modelId) => set(() => ({ model, modelId })),
}));

export { useModelStore };
