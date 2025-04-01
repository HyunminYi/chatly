"use client";
import FormCard from "@/app/components/auth/FormCard";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import Submit from "@/app/components/auth/Submit";
import { ChangeEvent } from "react";

const SignUpForm = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value, `:name,value`);
  };
  return (
    <FormCard
      title="회원가입"
      footer={{
        label: "이미 계정이 있으신가요?",
        href: "/login",
      }}
    >
      <form className="space-y-6">
        {/*이름*/}
        <div className="space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
          />
        </div>
        {/*이메일*/}
        <div className="space-y-1">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일@도메인.com"
            onChange={handleChange}
          />
        </div>
        {/*비밀번호*/}
        <div className="space-y-1">
          <Label htmlFor="pw">비밀번호</Label>
          <Input
            id="pw"
            name="pw"
            type="password"
            placeholder="******"
            onChange={handleChange}
          />
        </div>
        <Submit className="space-y-1 w-full">가입하기</Submit>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
