import db from "../../../db";
import { eq } from "drizzle-orm";
import { conversation } from "../../../db/schema";
import { Message } from "ai";

export const getMessagesByConversation = async (id: string) => {
  const response = await db.query.conversation.findFirst({
    where: eq(conversation.id, id),
    with: {
      messages: {
        orderBy: (message, { asc }) => [asc(message.createdAt)],
      },
    },
  });
  return (response?.messages || []) as Message[];
};
