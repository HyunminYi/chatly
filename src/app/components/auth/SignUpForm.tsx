"use client";
import FormCard from "@/app/components/auth/FormCard";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import Submit from "@/app/components/auth/Submit";
import { ChangeEvent, useEffect } from "react";
import useFormValidate from "@/app/hooks/useFormValidate";
import { SignUpSchema } from "@/app/schemas/auth";
import { TSignUpFormError } from "@/app/types/form";
import FormMessage from "@/app/components/auth/FormMessage";
import { useFormState } from "react-dom";
import { signUp } from "@/app/actions/signup";
import { toast } from "@/app/hooks/use-toast";

const SignUpForm = () => {
  const [error, action] = useFormState(signUp, null);
  // zod schema validation custom hook
  const { errors, validateField } =
    useFormValidate<TSignUpFormError>(SignUpSchema);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  useEffect(() => {
    if (error?.errorMessage) {
      toast({
        title: "회원가입 실패",
        description: error.errorMessage,
        variant: "destructive",
      });
    }
  }, [error]);
  return (
    <FormCard
      title="회원가입"
      footer={{
        label: "이미 계정이 있으신가요?",
        href: "/login",
      }}
    >
      <form action={action} className="space-y-6">
        {/*이름*/}
        <div className="space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            error={!!errors?.name}
            onChange={handleChange}
          />
          {errors?.name && <FormMessage>{errors?.name[0]}</FormMessage>}
        </div>
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
        <Submit className="space-y-1 w-full">가입하기</Submit>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
