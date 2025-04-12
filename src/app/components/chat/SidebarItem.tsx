"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSheetStore } from "@/app/store/sheet";

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
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const setOpen = useSheetStore((state) => state.setOpen);
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <Link
      scroll={false}
      href={href}
      className={cn(
        "flex items-center justify-between text-sm p-3 group hover:text-white hover:bg-white/10 rounded-lg",
        isMenuOpen || pathname === href
          ? "text-white bg-white/10"
          : "text-zinc-400",
      )}
      onClick={() => setOpen}
    >
      {/*label 영역*/}
      <div className="flex items-center gap-2">
        {icon}
        <div className="truncate w-[180px]">{label}</div>
      </div>
      {/*드롭다운 메뉴 영역*/}
      {id !== "new" && (
        <DropdownMenu open={isMenuOpen} onOpenChange={handleMenu}>
          <DropdownMenuTrigger asChild>
            <div onClick={handleMenu}>
              <Ellipsis
                className={cn(
                  "group-hover:block text-gray-400 hover:text-white",
                  isMenuOpen ? "block text-white" : "md-hidden text-gray-400",
                )}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Pencil className="w-4 h-4 " />
              제목 수정하기
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="w-4 h-4 " />
              대화 삭제하기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Link>
  );
};

export default SidebarItem;
