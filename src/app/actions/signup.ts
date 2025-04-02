"use server";

import { SignUpSchema } from "@/app/schemas/auth";
import { getUserByEmail } from "@/app/data/user";
import bcrypt from "bcryptjs";
import db from "../../../db";
import { user } from "../../../db/schema";
import { redirect } from "next/navigation";

export const signUp = async (_: any, formData: FormData) => {
  try {
    // 1. validation fields
    const validateFields = SignUpSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      pw: formData.get("pw"),
    });
    if (!validateFields.success) {
      return { errorMessage: "잘못된 입력값이 있습니다." };
    }
    // 2. user check
    const { name, email, pw } = validateFields.data;
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        errorMessage: "이미 존재하는 이메일 입니다.",
      };
    }
    const hashedPw = await bcrypt.hash(pw, 10);
    // 3. insert db
    // TODO: CREATEUSER data/user.ts 로 이동
    await db.insert(user).values({ name, email, password: hashedPw });
    // 4. success /fail redirect
  } catch (e) {
    console.log("error", e);
    return { errorMessage: "문제가 발생했습니다.signup.ts" };
  }
  redirect("/login");
};
