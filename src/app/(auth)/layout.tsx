import { IChildren } from "@/app/types/common";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default Layout;
