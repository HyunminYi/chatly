import { user } from "../../../db/schema";

// drizzleOrm 에서 지원하는 inferSelect,Insert 로 테이블데이터 타이핑
export type TUser = typeof user.$inferSelect;
