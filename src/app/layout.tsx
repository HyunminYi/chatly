import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster";
import { ReactNode } from "react";

import { aggro } from "@/app/styles/font";

export const metadata: Metadata = {
  title: "이현민 Chatly",
  description: "Chatbot 이현민 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={aggro.variable}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
