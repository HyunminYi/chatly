"use client";
//*
import Empty from "@/app/components/chat/Empty";
import Message from "@/app/components/chat/Message";
import AutoResizingTextarea from "@/app/components/chat/AutoResizingTextarea";
import { memo, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Message as IMessage } from "@ai-sdk/react";
import { useModelStore } from "@/app/store/model";
import useChatHandler from "@/app/hooks/chat/useChatHandler";
import { toast } from "@/app/hooks/use-toast";

// type Props = {
//   initialMessages?: IMessage[];
// };
// REFACTOR : 인터랙션 / UI 분리

interface IProps {
  initialMessages: IMessage[];
}
//

const Chat = memo(({ initialMessages }: IProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    params,
    user,
  } = useChatHandler();
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
            if (!model) {
              e.preventDefault();
              toast({
                title: "모델을 선택해줘",
                variant: "destructive",
              });
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
});

export default Chat;
