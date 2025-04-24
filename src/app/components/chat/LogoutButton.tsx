"use client";
import { Button } from "@/app/components/ui/button";
import { deleteSession } from "@/app/actions/sessions";
import { useEffect } from "react";
import { useUserStore } from "@/app/store/user";

const LogoutButton = () => {
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    return () => {
      clearUser();
    };
  }, [clearUser]);
  return (
    <>
      <Button
        className="w-full m-4 opacity-70 bg-slate-600 hover:bg-red-600/90 hover:opacity-90 transition-none"
        onClick={() => deleteSession()}
      >
        로그아웃
      </Button>
    </>
  );
};

export default LogoutButton;
