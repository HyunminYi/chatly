"use server";
// jwt 생성 검증 쿠키 세팅 삭제 로직ㅁ

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SessionPayload = {
  id: string;
  name: string;
};
const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey); // jose 를 위한 byte 변형

// 암호화
const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt() // 발급시간을 현재로
    .setExpirationTime("1h") // 만료시간 설정
    .sign(key);
};

// 검증
export const verify = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (e) {
    console.error(e, "토큰 검증에 실패하였습니다.");
  }
};

export const createSession = async (payload: SessionPayload) => {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24시간 후
  const session = await encrypt(payload);
  // next coockies (
  cookies().set("session", session, {
    httpOnly: true,
    expires: expiresAt,
    secure: true,
    sameSite: "lax", // link 클릭 시 쿠키 전송 여부
    path: "/",
  });
};

export const deleteSession = async () => {
  cookies().delete("session");
};

// 세션 검증
export const verifySession = async () => {
  const cookie = cookies().get("session")?.value;
  const session = await verify(cookie);

  if (!session?.id) redirect("/login");
  return session;
};
