"use client";
import { addMessages, createConversation } from "@/app/actions/conversation";
import { CHAT_ROUTES } from "@/app/constants/routes";
import { useParams, useRouter } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import useUser from "@/app/hooks/user/useUser";

export const useChatHandler = () => {
  const router = useRouter();
  const params = useParams<{ conversationId: string }>();
  // const user = useUserStore((state) => state.user);
  const { data: user, isLoading } = useUser();
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
  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    params,
    user,
    isLoading,
  };
};

export default useChatHandler;
