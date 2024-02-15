import { createContext } from "react";

export type User = {
  name: string;
  isAdmin: boolean;
};

export type UserContextType = {
  user: User | null;
  isAuth: boolean;
  login: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuth: false,
  login: () => {},
});
