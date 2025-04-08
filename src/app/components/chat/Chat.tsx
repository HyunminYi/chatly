import Empty from "@/app/components/chat/Empty";
import Message from "@/app/components/chat/Message";

const Chat = () => {
  const MESSAGE_DUMMY = [
    { id: "1", content: "더미데이터1", role: "user" },
    { id: "2", content: "더미데이터2", role: "assistant" },
  ];

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      {/*  채팅영역   */}
      <div className="flex-1">
        {MESSAGE_DUMMY.length === 0 ? (
          <Empty />
        ) : (
          <>
            {MESSAGE_DUMMY.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                role={message.role}
              />
            ))}
          </>
        )}
      </div>
      {/*  input영역  */}
      <div></div>
    </div>
  );
};

export default Chat;
