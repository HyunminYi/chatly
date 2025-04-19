"use server";

import { verifySession } from "@/app/actions/sessions";
import { conversation, message } from "../../../db/schema";
import db from "../../../db";
import { revalidatePath } from "next/cache";
import { BASE_URL, CHAT_ROUTES } from "@/app/constants/routes";
import { eq } from "drizzle-orm";

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
    role: "assistant",
  });
  revalidatePath(`${CHAT_ROUTES.CONVERSATIONS}/${conversationId}`);
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

export const updateConversation = async (id: string, name: string) => {
  const result = await db
    .update(conversation)
    .set({ name, updatedAt: new Date() })
    .where(eq(conversation.id, id))
    .returning();
  revalidatePath(BASE_URL); // 해당 경로 재검증하여 업데이트됐다면 캐시를 리프레시함
  return result[0];
};

export const deleteConversation = async (id: string) => {
  await db.delete(conversation).where(eq(conversation.id, id));
  revalidatePath(BASE_URL);
};
