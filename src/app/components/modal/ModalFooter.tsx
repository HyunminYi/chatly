import { Button } from "@/app/components/ui/button";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};
const ModalFooter = ({ onCancel, onConfirm }: Props) => {
  return (
    <>
      <Button variant="destructive" onClick={onCancel}>
        삭제
      </Button>
      <Button onClick={onConfirm}>취소</Button>
    </>
  );
};

export default ModalFooter;
