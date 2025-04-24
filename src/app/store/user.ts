import { create } from "zustand/react";
import { TUser } from "@/app/types/db";

// type State = {
//   user: Partial<User>;
// };
// type Action = {
//   updateUser: (payload: State["user"]) => void;
// };

interface IState {
  user: Partial<TUser>;
}
interface IAction {
  updateUser: (payload: IState["user"]) => void;
  clearUser: () => void;
}

const initialValue: IState = {
  user: {
    id: "",
    name: "",
  },
};
const useUserStore = create<IState & IAction>((set) => ({
  ...initialValue,
  updateUser: (payload) => set({ user: payload }),
  clearUser: () => set({ user: initialValue.user }),
}));
export { useUserStore };
