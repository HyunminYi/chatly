"use client"; // Error boundaries must be Client Comp.

import { BASE_URL } from "@/app/constants/routes";
import Link from "next/link";

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <html>
      <body>
        <h2>어플리케이션 에러</h2>
        <p>예기치 못한 에러가 발생했습니다.</p>
        <p>{error.message}</p>
        <p>
          위 에러메세지를 <span>smurf@kakao.com</span> 문의 주시길 바랍니다.
        </p>
        <Link href={BASE_URL}>메인화면으로 돌아가기</Link>
      </body>
    </html>
  );
};

export default GlobalError;
