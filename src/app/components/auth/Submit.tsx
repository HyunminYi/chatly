// -# 컴포넌트 역할 분리
import { Button, ButtonProps } from "@/app/components/ui/button";

const Submit = ({ children, ...props }: ButtonProps) => {
  // const { pending } = useFormStatus();
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

export default Submit;
