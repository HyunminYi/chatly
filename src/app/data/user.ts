import { User } from "@/app/types/db";
import db from "../../../db";
import { eq } from "drizzle-orm";
import { user } from "../../../db/schema";
import { verifySession } from "@/app/actions/sessions";
import { LoginSchema } from "@/app/schemas/auth";
import { z } from "zod";

export const getUserByEmail = async (
  email: z.infer<typeof LoginSchema>["email"],
): Promise<User | null> => {
  try {
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });
    if (!existingUser) {
      return null;
    }
    return existingUser;
  } catch (e) {
    console.log("error", e);
    throw new Error("문제가 발생했습니다.");
  }
};

export const getConversationsByUser = async () => {
  const session = await verifySession();
  const response = await db.query.user.findFirst({
    where: eq(user.id, session.id),
    with: {
      conversations: {
        orderBy: (conversation, { desc }) => [desc(conversation.updatedAt)],
      },
    }, // 다른 fk 테이블 알려줌
  });
  return response?.conversations || [];
};
