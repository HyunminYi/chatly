"use server";
//-# next 14 -> 15 cookies()비동기 처리
// jwt 생성 검증 쿠키 세팅 삭제 로직

import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_URL } from "@/app/constants/routes";

export interface ISessionPayload {
  id: string;
  name: string;
  [key: string]: any;
}
const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey); // jose 를 위한 byte 변형

// 암호화
const encrypt = async (payload: ISessionPayload & JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt() // 발급시간을 현재로
    .setExpirationTime("1h") // 만료시간 설정
    .sign(key);
};

// 검증
export const verify = async (session: string | undefined = "") => {
  if (!session) return null;
  try {
    const { payload } = await jwtVerify<ISessionPayload>(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (e) {
    console.error(e, "토큰 검증에 실패하였습니다.");
  }
};

export const createSession = async (payload: ISessionPayload) => {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24시간 후
  const session = await encrypt(payload);
  const c = await cookies();
  c.set("session", session, {
    httpOnly: true,
    expires: expiresAt,
    secure: true,
    sameSite: "lax", // link 클릭 시 쿠키 전송 여부
    path: "/",
  });
};

export const deleteSession = async () => {
  const c = await cookies();
  c.delete("session");
};

// 세션 검증
export const verifySession = async () => {
  const c = await cookies();
  // const cookie = cookies().get("session")?.value;
  const cookie = c.get("session")?.value;
  const session = await verify(cookie);

  if (!session?.id) redirect(AUTH_URL.LOGIN);
  return session;
};
