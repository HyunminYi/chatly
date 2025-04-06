"use server";

import { LoginSchema } from "@/app/schemas/auth";
import { getUserByEmail } from "@/app/data/user";
import bcrypt from "bcryptjs";
import { createSession } from "@/app/actions/sessions";
import { redirect } from "next/navigation";

export const login = async (_: any, formData: FormData) => {
  // 1. validation fields
  const validateFields = LoginSchema.safeParse({
    email: formData.get("email"),
    pw: formData.get("pw"),
  });
  if (!validateFields.success) {
    return { errorMessage: "잘못된 입력값이 있습니다." };
  }
  // 2. user check
  const { email, pw } = validateFields.data;
  try {
    //   존재하는 사용자인지 체크
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return {
        errorMessage: "존재하지 않는 사용자 입니다. 회원가입을 해주세요",
      };
    }
    const { id, name, password: userPassword } = existingUser;
    const passwordMatch = await bcrypt.compare(pw, userPassword);
    if (!passwordMatch) {
      return { errorMessage: "비밀번호가 일치하지 않습니다." };
    }
    // jwt 세션 생성 로직
    await createSession({
      id,
      name,
    });
  } catch (e) {
    console.log("error", e);
    return {
      errorMessage: "문제가 발생했습니다.login.ts",
    };
  }
  redirect("/");
};
