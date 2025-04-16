"use client";

import Empty from "@/app/components/chat/Empty";
import Message from "@/app/components/chat/Message";
import AutoResizingTextarea from "@/app/components/chat/AutoResizingTextarea";
import { useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useChat, Message as TMessage } from "@ai-sdk/react";
import { useModelStore } from "@/app/store/model";
import { useParams, useRouter } from "next/navigation";
import { addMessages, createConversation } from "@/app/actions/conversation";
import { CHAT_ROUTES } from "@/app/constants/routes";
import { useUserStore } from "@/app/store/user";

const MESSAGE_DUMMY = [
  { id: "1", content: "더미데이터1", role: "user" },
  { id: "2", content: "더미데이터2", role: "assistant" },
  { id: "3", content: "더미데이터1", role: "user" },
  { id: "4", content: "더미데이터2", role: "assistant" },
  { id: "5", content: "더미데이터1", role: "user" },
  { id: "6", content: "더미데이터2", role: "assistant" },
];
type Props = {
  initialMessages?: TMessage[];
};
const Chat = ({ initialMessages }: Props) => {
  const router = useRouter();
  const params = useParams<{ conversationId: string }>();
  const user = useUserStore((state) => state.user);
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      // 응답이 끝난 시점 (대화기록)
      onFinish: async (message) => {
        //   param 구분 새 대화 / 기존 대화
        if (!params.conversationId) {
          //   새 대화 생성
          const conversation = await createConversation(input);
          //   messages 추가
          await addMessages(conversation.id, input, message.content);
          router.push(`${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`);
        } else {
          //    기존 대화페이지
          await addMessages(params.conversationId, input, message.content);
        }
      },
    });
  const model = useModelStore((state) => state.model);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages, setMessages]);
  // 스크롤바텀 로직
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {}, [messages]);
  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {!params.conversationId && messages.length === 0 ? (
          <Empty />
        ) : (
          <>
            {messages.map((message) => (
              <Message
                key={message.id}
                name={user.name}
                content={message.content}
                role={message.role}
              />
            ))}
          </>
        )}
      </div>
      <div className="pb-5 sticky bottom-0 bg-white">
        {/* TODO react hook form install */}
        <form
          className="flex items-center justify-between w-full"
          onSubmit={(e) => {
            // TODO toast 작업
            if (!model) {
              e.preventDefault();
              alert("모델을 선택해줘");
              return;
            }
            handleSubmit(e, { data: model });
          }}
        >
          <AutoResizingTextarea value={input} onChange={handleInputChange} />
          <Button
            type="submit"
            size="icon"
            className="bg-blue-500/90 hover:bg-blue-600/90 focus-visible:ring-1 ring-bg-blue-900/90"
          >
            <ArrowUp />
          </Button>
        </form>
      </div>
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Chat;
