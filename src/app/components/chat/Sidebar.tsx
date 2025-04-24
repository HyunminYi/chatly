//-# new_sidebar_item readonly 화
import Logo from "@/app/components/chat/Logo";
import { MessageSquare, Plus } from "lucide-react";
import { BASE_URL, CHAT_ROUTES } from "@/app/constants/routes";
import SidebarItem from "@/app/components/chat/SidebarItem";
import LogoutButton from "@/app/components/chat/LogoutButton";
import { getConversationsByUser } from "@/app/data/user";

const NEW_SIDEBAR_ITEM = {
  id: "new",
  label: "새로운 대화",
  icon: <Plus />,
  href: BASE_URL,
} as const;

const Sidebar = async () => {
  const conversations = await getConversationsByUser();
  const formattedItems = [
    NEW_SIDEBAR_ITEM,
    ...conversations.map((conversation) => ({
      id: conversation.id,
      label: conversation.name || "",
      icon: <MessageSquare />,
      href: `${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`,
    })),
  ];
  return (
    <>
      <nav className="h-full  flex flex-col text-white ">
        {/*로고 영역 + 메뉴 아이템*/}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-2">
          <Logo />
          <div className="flex flex-col gap-2 mt-10 ">
            {formattedItems.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/*  로그아웃 버튼 영역*/}
        <div className="flex justify-center">
          <LogoutButton />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
