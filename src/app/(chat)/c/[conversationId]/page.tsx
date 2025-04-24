import Chat from "@/app/components/chat/Chat";
import { getMessagesByConversation } from "@/app/data/conversations";

type Props = {
  params: {
    conversationId: string;
  };
};
const Page = async (props: Props) => {
  const { conversationId } = await props.params; // next 15 params 비동기적
  // console.log(params.conversationId, "params");
  const messages = await getMessagesByConversation(conversationId);
  // console.log(messages);

  return (
    <>
      <Chat initialMessages={messages} />
    </>
  );
};

export default Page;
