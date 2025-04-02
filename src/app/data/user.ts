import { User } from "@/app/types/db";
import db from "../../../db";
import { eq } from "drizzle-orm";
import { user } from "../../../db/schema";

export const getUserByEmail = async (email): Promise<User | null> => {
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
