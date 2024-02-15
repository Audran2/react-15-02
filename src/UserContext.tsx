import { createContext } from "react";

export type User = {
  name: string;
  isAdmin: boolean;
};

export type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});
