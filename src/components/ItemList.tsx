import { useContext } from "react";
import Item from "./Item";
import { CheeseContext } from "../CheeseContext";

const ItemList = () => {
  const { cheeses } = useContext(CheeseContext);

  return (
    <div>
      <h1>Fromages</h1>
      {cheeses.map((cheese) => (
        <Item cheese={cheese} key={cheese.name} />
      ))}
    </div>
  );
};

export default ItemList;
