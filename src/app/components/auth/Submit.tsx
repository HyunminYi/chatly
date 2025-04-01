import { Button, ButtonProps } from "@/app/components/ui/button";

const Submit = ({ children, ...props }: ButtonProps) => {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

export default Submit;
