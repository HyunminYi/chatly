"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Sidebar from "@/app/components/chat/Sidebar";
import { Menu } from "lucide-react";
import { useSheetStore } from "@/app/store/sheet";

const MobileMenu = () => {
  // const { open, setOpen } = useSheetStore((state) => ({
  //   open: state.open,
  //   setOpen: state.setOpen,
  // }));
  const open = useSheetStore((state) => state.open);
  const setOpen = useSheetStore((state) => state.setOpen);
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
