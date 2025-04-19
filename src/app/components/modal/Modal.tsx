import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/app/components/ui/dialog";
import { DialogHeader } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { useModalStore } from "@/app/store/modal";

const Modal = () => {
  const open = useModalStore((state) => state.open);
  const config = useModalStore((state) => state.config);
  const closeModal = useModalStore((state) => state.closeModal);
  const { title, description, content, footer } = config || {};
  return (
    <>
      <Dialog open={open} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {content}
          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
