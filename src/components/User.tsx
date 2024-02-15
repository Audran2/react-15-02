import { useContext } from "react";
import { UserContext } from "../UserContext";

const User = () => {
  const { user } = useContext(UserContext);

  return <div>utilisateur: {user?.name}</div>;
};

export default User;
