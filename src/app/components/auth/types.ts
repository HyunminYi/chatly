import { ReactNode } from "react";

export type Props = {
  title: string;
  footer: { label: string; href: string };
  children: ReactNode;
};
