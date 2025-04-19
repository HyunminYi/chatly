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
import { useEffect } from "react";
import { ValueOf } from "next/constants";
import { modelMap, MODELS, tModelId, tModelName } from "@/app/types/model";
import { useToggleStore } from "@/app/store/toggle";
import SelectAlert from "@/app/components/chat/SelectAlert";

// export const MODELS = [
//   "Claude3.5 Haiku",
//   "Claude3.5 Sonnet",
//   "Claude3 Sonnet",
//   "Claude3 Haiku",
// ] as const;
//
// export type tModelName = (typeof MODELS)[number];
//
// const modelMap: Record<tModelName, string> = {
//   "Claude3.5 Haiku": "claude-3-5-haiku-20241022",
//   "Claude3.5 Sonnet": "claude-3-5-sonnet-20241022",
//   "Claude3 Haiku": "claude-3-haiku-20240307",
//   "Claude3 Sonnet": "claude-3-sonnet-20240229",
// };

const ModelSelect = () => {
  // const { model: currentModel, updateModel } = useModelStore((state) => ({
  //   model: state.model,
  //   updateModel: state.updateModel,
  // }));
  const currentModel = useModelStore((state) => state.model);
  const updateModel = useModelStore((state) => state.updateModel);
  const updateToggle = useToggleStore((state) => state.updateToggle);
  const toggle = useToggleStore((state) => state.toggle);

  const handleChange = (selectModel: tModelName) => {
    // updateToggle(true);
    const model = selectModel;
    const modelId = modelMap[model];
    // console.log(model, modelId);
    updateModel({
      model,
      modelId,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={currentModel ?? ""}
        onValueChange={handleChange}
        onOpenChange={() => updateToggle(true)}
      >
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
      {!toggle ? <SelectAlert /> : null}
    </div>
  );
};

export default ModelSelect;
