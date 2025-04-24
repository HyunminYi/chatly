"use client";
import { useActionState } from "react";
import useFormValidate from "@/app/hooks/form/useFormValidate";
import { ChangeEvent, useEffect } from "react";
import { toast } from "@/app/hooks/use-toast";
import FormCard from "@/app/components/auth/FormCard";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import FormMessage from "@/app/components/auth/FormMessage";
import Submit from "@/app/components/auth/Submit";
import { LoginSchema } from "@/app/schemas/auth";
import { login } from "@/app/actions/login";
import { Card } from "@/app/components/ui/card";
import { ILoginFormError } from "@/app/types/form";
import { AUTH_URL } from "@/app/constants/routes";

const initialError = {
  errorMessage: "",
} as const;

const LoginForm = () => {
  const [error, action, pending] = useActionState(login, initialError);
  const { errors, validateField, resetErrors } =
    useFormValidate<ILoginFormError>(LoginSchema);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  useEffect(() => {
    if (error?.errorMessage) {
      toast({
        title: "로그인 실패",
        description: error.errorMessage,
        variant: "destructive",
      });
    }
  }, [error]);

  useEffect(() => {
    return resetErrors();
  }, [resetErrors]);

  return (
    <FormCard
      title="CHATLY 로그인"
      footer={{
        label: "아직 계정이 없으신가요? 회원가입 하기",
        href: AUTH_URL.SIGN_UP,
      }}
    >
      <Card className="p-4 shadow-none bg-slate-200/40 border-blue-600 opacity-70 scale-90">
        <p
          className="text-blue-600 text-xs font-light
      "
        >
          * 테스트용 아이디
          <strong> admin@admin.com </strong> <br />* 패스워드
          <strong> 12345678Aa </strong>
          입니다.
        </p>
      </Card>
      <form action={action} className="space-y-6">
        {/*이메일*/}
        <div className="space-y-1">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일@도메인.com"
            error={!!errors?.email}
            onChange={handleChange}
          />
          {errors?.email && <FormMessage>{errors?.email[0]}</FormMessage>}
        </div>
        {/*비밀번호*/}
        <div className="space-y-1">
          <Label htmlFor="pw">비밀번호</Label>
          <Input
            id="pw"
            name="pw"
            type="password"
            placeholder="******"
            error={!!errors?.pw}
            onChange={handleChange}
          />
          {errors?.pw && <FormMessage>{errors?.pw[0]}</FormMessage>}
        </div>
        <Submit className="space-y-1 w-full" disabled={pending}>
          로그인
        </Submit>
      </form>
    </FormCard>
  );
};

export default LoginForm;
