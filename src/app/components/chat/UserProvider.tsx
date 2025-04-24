"use client";

import { useUserStore } from "@/app/store/user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AUTH_URL } from "@/app/constants/routes";
import { IChildren } from "@/app/types/common";
import { useUser } from "@/app/hooks/user/useUser";

const UserProvider = ({ children }: IChildren) => {
  const router = useRouter();
  const updateUser = useUserStore((state) => state.updateUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const { data: user, isLoading, isError, error } = useUser();

  useEffect(() => {
    if (user) updateUser(user);
  }, [user]);

  useEffect(() => {
    if (isError) {
      clearUser();
      console.error("사용자 검증에 실패하였습니다", error);
      router.push(AUTH_URL.LOGIN);
    }
  }, [isError, error, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return <>{children}</>;
};
//
// const UserProvider = ({ children }: IChildren) => {
//   const updateUser = useUserStore((state) => state.updateUser);
//   useEffect(() => {
//     const setUser = async () => {
//       const user = await verifySession();
//       if (user) {
//         updateUser(user);
//       }
//     };
//     setUser();
//   }, []);
//   return <>{children}</>;
// };
//
export default UserProvider;
