import { Props } from "@/app/components/auth/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";

const FormCard = ({ title, footer, children }: Props) => {
  return (
    <Card className="w-[500px] flex flex-col items-center border">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-[90%]">{children}</CardContent>
      <CardFooter>
        <Link href={footer.href} className="text-sm text-sky-700">
          {footer.label}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FormCard;
