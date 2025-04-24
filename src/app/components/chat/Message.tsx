//-#
import {
  AvatarFallback,
  AvatarImage,
  Avatar,
} from "@/app/components/ui/avatar";
import { memo, useMemo } from "react";

// type Props = {
//   name?: string;
//   content?: string;
//   role: string;
// };

interface IProps {
  name?: string;
  content?: string;
  role: string;
}
const Message = memo(
  ({ name = "User", content = "", role = "user" }: IProps) => {
    // const isAssistant = role === "assistant";
    // const avatarName = isAssistant ? "CHATLY" : name;

    const { avatarName, avatarSrc } = useMemo(() => {
      const isAssistant = role === "assistant";
      const avatarName = isAssistant ? "CHATLY" : name;
      const avatarSrc = isAssistant ? "/logo2.png" : "";
      return {
        avatarName,
        avatarSrc,
      };
    }, [role, name]);

    return (
      <div className="flex items-start gap-2 mb-5">
        {/*  아바타  */}
        <Avatar>
          <AvatarImage src={avatarSrc} alt="avatar" className="scale-90" />
          <AvatarFallback>{avatarName[0]}</AvatarFallback>
        </Avatar>
        {/*  이름 + 내용 */}
        <div>
          <h2 className="font-normal text-base">{avatarName}</h2>
          <div className="mt-2 whitespace-break-spaces font-light text-sm  leading-loose tracking-tight">
            {content}
          </div>
        </div>
      </div>
    );
  },
);

export default Message;
