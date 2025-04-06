import { NextRequest, NextResponse } from "next/server";
import { AUTH_URL, BASE_URL, PUBLIC_ROUTES } from "@/app/constants/routes";
import { cookies } from "next/headers";
import { verify } from "@/app/actions/sessions";

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const cookie = cookies().get("session")?.value;
  const session = await verify(cookie);
  //  비로그인
  if (!isPublicRoute && !session) {
    return NextResponse.redirect(new URL(AUTH_URL.LOGIN, request.nextUrl));
  }
  // 로그인 + 회원가입 / 로그인
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL(BASE_URL, request.nextUrl));
  }
  return NextResponse.next();
};

// middleware 실행 path :matcher []multiple
export const config = {
  matcher: ["/about:path*"],
};

// 로그인여부 리다이렉트
