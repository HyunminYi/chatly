import { create } from "zustand/react";
import { tModelId, tModelName } from "@/app/types/model";

type State = {
  model: tModelName | null;
  modelId: tModelId | null;
};
type Action = {
  updateModel: (payload: State) => void;
};

const useModelStore = create<State & Action>((set) => ({
  model: null,
  modelId: null,
  updateModel: ({ model, modelId }) =>
    set(() => ({
      model,
      modelId,
    })),
}));

export { useModelStore };
