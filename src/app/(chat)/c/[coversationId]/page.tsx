import Chat from "@/app/components/chat/Chat";
import { getMessagesByConversation } from "@/app/data/conversations";

type Props = {
  params: {
    conversationId: string;
  };
};
const Page = async ({ params: { conversationId } }: Props) => {
  const messages = await getMessagesByConversation(conversationId);

  return (
    <>
      <Chat initialMessages={messages} />
    </>
  );
};

export default Page;
