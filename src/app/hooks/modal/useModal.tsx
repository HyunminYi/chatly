// -# useSheetStore,useModalStore 를 useModal 훅으로 개별적관리위한 추상화
import { useCallback, useState } from "react";

interface IProps {
  defaultValue?: boolean;
  cbOpen?: () => void;
  cbClose?: () => void;
}
const useModal = (
  { defaultValue, cbOpen, cbClose }: IProps | undefined = {
    defaultValue: false,
  },
) => {
  const [open, setOpen] = useState<boolean>(defaultValue ?? false);

  const onOpen = useCallback(() => {
    if (cbOpen) cbOpen();
    setOpen(true);
  }, [cbOpen]);
  const onClose = useCallback(() => {
    if (cbClose) cbClose();
    setOpen(false);
  }, [cbClose]);
  const onToggle = useCallback((open?: boolean) => {
    if (open === undefined) {
      setOpen((prev) => !prev);
    } else {
      setOpen(open);
    }
  }, []);
  return { open, onOpen, onClose, onToggle };
};

export default useModal;
