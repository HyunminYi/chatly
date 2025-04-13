"use server";

import { verifySession } from "@/app/actions/sessions";
import { conversation, message } from "../../../db/schema";
import db from "../../../db";

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

  return result[0];
};
