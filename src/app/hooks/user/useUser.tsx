"use client";

import { useQuery } from "@tanstack/react-query";
import { verifySession } from "@/app/actions/sessions";

// 일관된 쿼리 키 사용
export const USER_QUERY_KEY = ["auth", "user"];

const retryTime = 3;
const intervalTime = 10 * 60 * 1000;
const staleTime = 5 * 60 * 1000;

function useUser() {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: verifySession,
    retry: retryTime,
    refetchOnMount: true,
    refetchInterval: intervalTime,
    staleTime: staleTime,
  });
}

//git check
export default useUser;
