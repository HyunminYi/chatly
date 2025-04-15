"use server";

import { verifySession } from "@/app/actions/sessions";
import { conversation, message } from "../../../db/schema";
import db from "../../../db";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "@/app/constants/routes";

export const addMessages = async (
  conversationId: string,
  userContent: string,
  aiContent: string,
) => {
  await db.insert(message).values({
    conversationId,
    content: userContent,
    role: "user",
  });
  await db.insert(message).values({
    conversationId,
    content: aiContent,
    role: "ai",
  });
};
export const createConversation = async (name: string) => {
  const session = await verifySession();

  const result = await db
    .insert(conversation)
    .values({
      name,
      userId: session.id,
    })
    .returning(); //result array;
  revalidatePath(BASE_URL); // 해당 경로 재검증하여 업데이트됐다면 캐시를 리프레시함
  return result[0];
};
