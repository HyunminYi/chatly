import { Button } from "@/app/components/ui/button";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};
const ModalFooter = ({ onCancel, onConfirm }: Props) => {
  return (
    <>
      <Button variant="destructive" onClick={onConfirm}>
        삭제
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </>
  );
};

export default ModalFooter;
