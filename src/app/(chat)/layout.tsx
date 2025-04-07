import { IChildren } from "@/app/types/common";
import Sidebar from "@/app/components/chat/Sidebar";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="md:flex h-full">
      {/*sidebar*/}
      <div className="hidden md:block w-[300px]">
        <Sidebar />
      </div>
      {/*header*/}
      <div></div>
      {children}
    </div>
  );
};

export default Layout;
