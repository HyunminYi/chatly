import { create } from "zustand/react";
import { User } from "@/app/types/db";

type State = {
  user: Partial<User>;
};
type Action = {
  updateUser: (payload: State["user"]) => void;
};

const useUserStore = create<State & Action>((set) => ({
  user: {
    id: "",
    name: "",
  },
  updateUser: (user) => set(() => ({ user })),
}));

export { useUserStore };
