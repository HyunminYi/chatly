import { IChildren } from "@/app/types/common";

const FormMessage = ({ children }: IChildren) => {
  return <p className="text-red-500 text-sm opacity-70 pl-2">{children}</p>;
};

export default FormMessage;
