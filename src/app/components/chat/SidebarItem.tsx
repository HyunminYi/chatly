"use client";
// TODO -# modalstore -> modal hook 으로 변경
import React, {
  ChangeEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  MouseEvent,
} from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSheetStore } from "@/app/store/sheet";
import {
  deleteConversation,
  updateConversation,
} from "@/app/actions/conversation";
import { toast } from "@/app/hooks/use-toast";
import { useModalStore } from "@/app/store/modal";
import ModalFooter from "@/app/components/modal/ModalFooter";
import { BASE_URL } from "@/app/constants/routes";
import useModal from "@/app/hooks/modal/useModal";

interface IProps {
  item: {
    id: string;
    href: string;
    icon: ReactNode;
    label: string;
  };
  key: string;
}
const SidebarItem = ({ item }: IProps) => {
  const { id, href, icon, label } = item;
  const pathname = usePathname();
  const params = useParams<{ conversationId: string }>();
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(label);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const { onOpen, open, onClose } = useModal();
  const setOpen = useSheetStore((state) => state.setOpen);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleBlur = async () => {
    setIsEditMode(false);
    if (value === label) return null;
    try {
      await updateConversation(id, value);
    } catch (e: unknown) {
      console.log(e);
      if (e instanceof Error) {
        toast({
          title: "이름 수정에 실패하였습니다.",
          variant: "destructive",
          description: e.message,
        });
      }
    }
  };
  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleBlur();
    }
  };
  const handleDelete = async () => {
    try {
      await deleteConversation(id);
      toast({
        title: "삭제 완료",
      });
      closeModal();
      if (params?.conversationId === id) {
        router.push(BASE_URL);
      }
    } catch (e) {
      console.error(e);
      toast({
        title: "문제가 발생했습니다.",
        variant: "destructive",
      });
    }
  };
  const clickDelete = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    //   모달 로직
    openModal({
      title: "정말 삭제하시겠습니까?",
      description: "삭제 후 데이터는 복구하기 어렵습니다. ",
      footer: <ModalFooter onCancel={closeModal} onConfirm={handleDelete} />,
    });
  };
  const clickEdit = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsEditMode(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isEditMode]);
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
      onClick={() => setOpen(!open)}
    >
      {/*label 영역*/}
      <div className="flex items-center gap-4">
        {icon}
        {isEditMode ? (
          <input
            value={value}
            onChange={(e) => handleChange(e)}
            onClick={(e) => e.preventDefault()}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        ) : (
          <div className="truncate w-[180px]">{label}</div>
        )}
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
            <DropdownMenuItem onClick={(e) => clickEdit(e)}>
              <Pencil className="w-4 h-4 bottom-0.5 relative " />
              제목 수정하기
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => clickDelete(e)}>
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
