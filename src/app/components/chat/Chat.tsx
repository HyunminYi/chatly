"use client";

import Empty from "@/app/components/chat/Empty";
import Message from "@/app/components/chat/Message";
import AutoResizingTextarea from "@/app/components/chat/AutoResizingTextarea";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useChat } from "@ai-sdk/react";
const MESSAGE_DUMMY = [
  { id: "1", content: "더미데이터1", role: "user" },
  { id: "2", content: "더미데이터2", role: "assistant" },
  { id: "3", content: "더미데이터1", role: "user" },
  { id: "4", content: "더미데이터2", role: "assistant" },
  { id: "5", content: "더미데이터1", role: "user" },
  { id: "6", content: "더미데이터2", role: "assistant" },
];
const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const scrollRef = useRef<HTMLDivElement>(null);
  // 스크롤바텀 로직
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {messages.length === 0 ? (
          <Empty />
        ) : (
          <>
            {messages.map((message) => (
              <Message
                key={message.id}
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
          className="flex items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <AutoResizingTextarea value={input} onChange={handleInputChange} />
          <Button type="submit" size="icon">
            <ArrowUp />
          </Button>
        </form>
      </div>
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Chat;
