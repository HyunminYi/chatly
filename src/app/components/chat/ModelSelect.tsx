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

const MODELS = ["claude3.5-haiku", "gpt-3.5-turbo", "gpt-4", "gpt-4o"];

const ModelSelect = () => {
  // const { model: currentModel, updateModel } = useModelStore((state) => ({
  //   model: state.model,
  //   updateModel: state.updateModel,
  // }));
  const currentModel = useModelStore((state) => state.model);
  const updateModel = useModelStore((state) => state.updateModel);

  const handleChange = (selectModel: string) => {
    updateModel(selectModel);
  };

  return (
    <>
      <Select value={currentModel} onValueChange={updateModel}>
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
