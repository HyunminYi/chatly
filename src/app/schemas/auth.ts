import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "이름을 입력해주세요." })
    .regex(/^[a-zA-Zㄱ-ㅎ가-힣]+$/, {
      message: "이름은 한글 또는 영문만 입력해주세요.",
    }),
  email: z.string().email({ message: "이메일 형식에 맞지 않습니다." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 8자리 이상이어야 합니다." })
    .regex(/[A-Z]/, { message: "대문자가 포함되어야 합니다." })
    .regex(/[a-z]/, { message: "소문자가 포함되어야 합니다." })
    .regex(/[0-9]/, { message: "숫자가 포함되어야 합니다." }),
});
