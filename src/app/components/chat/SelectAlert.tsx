import { Card } from "@/app/components/ui/card";

const SelectAlert = () => {
  return (
    <>
      <Card className="bounce-box py-1 text-sm px-3 font-light border-blue-600 text-blue-600 drop-shadow-xl">
        <p>← 먼저 챗봇 모델을 선택해주세요</p>
      </Card>
    </>
  );
};

export default SelectAlert;
