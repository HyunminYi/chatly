import MobileMenu from "@/app/components/chat/MobileMenu";
import ModelSelect from "@/app/components/chat/ModelSelect";
import Sidebar from "@/app/components/chat/Sidebar";
import SelectAlert from "@/app/components/chat/SelectAlert";
import { useToggleStore } from "@/app/store/toggle";

const Header = () => {
  return (
    <header className="flex items-center p-2 sticky top-0 bg-white z-10">
      <MobileMenu children={<Sidebar />} />
      <div className="flex items-center gap-2">
        <ModelSelect />
      </div>
    </header>
  );
};

export default Header;
