import { Button, ButtonProps } from "@/app/components/ui/button";
import { useFormStatus } from "react-dom";

const Submit = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} {...props}>
      {children}
    </Button>
  );
};

export default Submit;
