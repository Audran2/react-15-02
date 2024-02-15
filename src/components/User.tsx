import { useContext } from "react";
import { UserContext } from "../UserContext";

const User = () => {
  const { user, login } = useContext(UserContext);

  if (!user) {
    return <button onClick={login}>Login</button>;
  }

  return <div>utilisateur: {user?.name}</div>;
};

export default User;
