"use client";
// -# toggle store -> custom hook 변경
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";
import { IChildren } from "@/app/types/common";
import useModal from "@/app/hooks/modal/useModalStore";

const MobileMenu = ({ children }: IChildren) => {
  // const { open, setOpen } = useSheetStore((state) => ({
  //   open: state.open,
  //   setOpen: state.setOpen,
  // }));
  // const open = useSheetStore((state) => state.open);
  // const setOpen = useSheetStore((state) => state.setOpen);
  const { open, onOpen, onToggle } = useModal();
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={(open) => onToggle(open)}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
