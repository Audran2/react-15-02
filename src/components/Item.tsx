import { useContext } from "react";
import { UserContext } from "../UserContext";

type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

const Item = ({ cheese }: { cheese: Cheese }) => {
  const { user } = useContext(UserContext);

  if (cheese.isAdmin === true && user?.isAdmin !== true) {
    return (
      <div
        style={{
          border: "1px solid white",
          minHeight: "10rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        You're not admin
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid white",
        minHeight: "10rem",
        marginBottom: "2rem",
      }}
    >
      <img
        src={cheese.photo}
        alt={cheese.name}
        style={{ height: "8rem", width: "auto" }}
      />
      <h2>{cheese.name}</h2>
    </div>
  );
};

export default Item;
