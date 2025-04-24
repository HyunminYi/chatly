// -# 내부 타입
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

export interface IProps {
  title: string;
  footer: { label: string; href: string };
  children: ReactNode;
}

const FormCard = ({ title, footer, children }: IProps) => {
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
