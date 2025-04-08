import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Sidebar from "@/app/components/chat/Sidebar";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
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
