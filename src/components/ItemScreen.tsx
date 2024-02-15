import ItemList from "./ItemList";

type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

const ItemScreen = ({ cheeses }: { cheeses: Cheese[] }) => {
  return (
    <div>
      <ItemList cheeses={cheeses} />
    </div>
  );
};

export default ItemScreen;
