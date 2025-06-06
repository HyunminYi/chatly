// -#
import { IChildren } from "@/app/types/common";

const FormMessage = ({ children }: IChildren) => {
  return (
    <p className="text-red-500 font-light text-xs opacity-90 pl-2">
      *{children}
    </p>
  );
};

export default FormMessage;
