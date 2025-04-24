import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster";
import { ReactNode } from "react";
import { aggro } from "@/app/styles/font";
import Modal from "@/app/components/modal/Modal";
import { TITLE } from "@/app/constants/common";
import ReactQueryProviders from "@/app/utils/react-query-provider";

export const metadata: Metadata = {
  title: `이현민 ${TITLE}`,
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
        <ReactQueryProviders>
          <Modal />
          {children}
          <Toaster />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
