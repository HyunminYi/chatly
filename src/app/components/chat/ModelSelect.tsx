"use client";
//-# toggle / model store -> custom hook 변경, placeholder (빈값) 에서 기본 선택 지정
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useModelStore } from "@/app/store/model";
import { modelMap, MODELS, tModelId, tModelName } from "@/app/types/model";
import SelectAlert from "@/app/components/chat/SelectAlert";
import useModal from "@/app/hooks/modal/useModalStore";

const ModelSelect = () => {
  const currentModel = useModelStore((state) => state.model);
  const updateModel = useModelStore((state) => state.updateModel);
  const { onOpen, open } = useModal();

  const handleChange = (selectModel: tModelName) => {
    const model = selectModel;
    const modelId = modelMap[model];
    updateModel({
      model,
      modelId,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={currentModel ?? "Claude3.5 Haiku"}
        onValueChange={handleChange}
        onOpenChange={onOpen}
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
      {!open ? <SelectAlert /> : null}
    </div>
  );
};

export default ModelSelect;
