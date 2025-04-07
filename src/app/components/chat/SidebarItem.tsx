import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  item: {
    id: string;
    href: string;
    icon: ReactNode;
    label: string;
  };
};
const SidebarItem = ({ item }: Props) => {
  const { id, href, icon, label } = item;
  return (
    <Link
      href={href}
      className="flex items-center justify-between text-sm p-3 group hover:text-white hover:bg-white/10 rounded-lg "
    >
      {/*label 영역*/}
      <div className="flex items-center gap-2">
        {icon}
        <div className="truncate w-[180px]">{label}</div>
      </div>
      {/*드롭다운 메뉴 영역*/}
      <div className="hidden group-hover:block">드롭다운 영역</div>
    </Link>
  );
};

export default SidebarItem;
