import { IChildren } from "@/app/types/common";
import Sidebar from "@/app/components/chat/Sidebar";
import Header from "@/app/components/chat/Header";
import UserProvider from "@/app/components/chat/UserProvider";

const Layout = ({ children }: IChildren) => {
  return (
    <UserProvider>
      <div className="md:flex h-full">
        {/*sidebar*/}
        <div className="hidden md:block w-[300px]">
          <Sidebar />
        </div>
        {/*header*/}
        <div className="flex flex-col flex-1 h-full overflow-y-auto">
          <Header />
          {children}
        </div>
      </div>
    </UserProvider>
  );
};

export default Layout;
