"use client";

import { useUserStore } from "@/app/store/user";
import { IChildren } from "@/app/types/common";
import { useEffect } from "react";
import { verifySession } from "@/app/actions/sessions";

const UserProvider = ({ children }: IChildren) => {
  const updateUser = useUserStore((state) => state.updateUser);
  useEffect(() => {
    const setUser = async () => {
      const user = await verifySession();
      if (user) {
        updateUser(user);
      }
    };
    setUser();
  }, []);
  return <>{children}</>;
};

export default UserProvider;
