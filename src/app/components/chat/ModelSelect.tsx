"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useModelStore } from "@/app/store/model";

export const MODELS = [
  "Claude3.5 Haiku",
  "Claude3.5 Sonnet",
  "Claude3 Sonnet",
  "Claude3 Haiku",
] as const;

export type tModelName = (typeof MODELS)[number];

const modelMap: Record<tModelName, string> = {
  "Claude3.5 Haiku": "claude-3-5-haiku-20241022",
  "Claude3.5 Sonnet": "claude-3-5-sonnet-20241022",
  "Claude3 Haiku": "claude-3-haiku-20240307",
  "Claude3 Sonnet": "claude-3-sonnet-20240229",
};

const ModelSelect = () => {
  // const { model: currentModel, updateModel } = useModelStore((state) => ({
  //   model: state.model,
  //   updateModel: state.updateModel,
  // }));
  const currentModel = useModelStore((state) => state.model);
  const updateModel = useModelStore((state) => state.updateModel);
  const handleChange = (selectModel: tModelName) => {
    const model = modelMap[selectModel];
    updateModel(model);
    console.log(selectModel, model);
  };

  return (
    <>
      <Select value={currentModel} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px] border-none text-sm focus:ring-transparent">
          <SelectValue placeholder="모델 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {MODELS.map((model, i) => (
              <SelectItem
                value={model}
                key={model}
                disabled={currentModel === model}
                className="text-sm"
              >
                {model}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default ModelSelect;
