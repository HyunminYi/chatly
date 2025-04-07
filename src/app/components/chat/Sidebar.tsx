import Logo from "@/app/components/chat/Logo";
import { MessageSquare, Plus } from "lucide-react";
import { BASE_URL, CHAT_ROUTES } from "@/app/constants/routes";
import SidebarItem from "@/app/components/chat/SidebarItem";

const DUMMY_ITEMS = [
  {
    id: "new",
    label: "새로운 대화",
    icon: <Plus />,
    href: BASE_URL,
  },
  {
    id: "1",
    label: "새로운 긴 대화 샘플입니다. 굉장히 깁니다. 더미데이터입니다.",
    icon: <MessageSquare />,
    href: `${CHAT_ROUTES.CONVERSATIONS}/1}`,
  },
  {
    id: "2",
    label: "대화 샘플 일반 길이",
    icon: <MessageSquare />,
    href: `${CHAT_ROUTES.CONVERSATIONS}/2}`,
  },
];

const Sidebar = () => {
  return (
    <nav className="h-full p-3 bg-black flex flex-col text-white ">
      {/*로고 영역 + 메뉴 아이템*/}
      <div className="flex-1 overflow-y-auto m-2">
        <Logo />
        <div className="flex flex-col gap-2 mt-10">
          {DUMMY_ITEMS.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/*  로그아웃 버튼 영역*/}
      <div>로그아웃</div>
    </nav>
  );
};

export default Sidebar;
