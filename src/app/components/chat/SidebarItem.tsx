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
        "flex items-center justify-between text-sm p-3 group hover:text-slate-800 hover:bg-slate-950/10 rounded-lg",
        isMenuOpen || pathname === href
          ? "text-slate-800 bg-sky-600/25  hover:bg-slate-600/20 hover:text-slate-900/90"
          : "text-slate-800 bg-slate-100",
      )}
      onClick={() => setOpen}
    >
      {/*label 영역*/}
      <div className="flex items-center gap-4">
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
                  "group-hover:block text-slate-600 hover:text-slate-800",
                  isMenuOpen
                    ? "block text-slate-800"
                    : "md-hidden text-slate-900",
                )}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Pencil className="w-4 h-4 bottom-0.5 relative " />
              제목 수정하기
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="w-4 h-4 bottom-0.5 relative" />
              대화 삭제하기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Link>
  );
};

export default SidebarItem;
