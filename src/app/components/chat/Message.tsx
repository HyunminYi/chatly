import {
  AvatarFallback,
  AvatarImage,
  Avatar,
} from "@/app/components/ui/avatar";

type Props = {
  name?: string;
  content?: string;
  role: string;
};

const Message = ({ name = "User", content = "", role = "user" }: Props) => {
  const isAssistant = role === "assistant";
  const avatarName = isAssistant ? "CHATLY" : name;
  return (
    <div className="flex items-center gap-2 mb-5">
      {/*  아바타  */}
      <Avatar>
        <AvatarImage src={isAssistant ? "/logo2.png" : ""} alt="avatar" />
        <AvatarFallback>{avatarName[0]}</AvatarFallback>
      </Avatar>
      {/*  이름 + 내용 */}
      <div>
        <h2 className="font-bold">{avatarName}</h2>
        <div className="mt-2 whitespace-break-spaces">{content}</div>
      </div>
    </div>
  );
};

export default Message;
