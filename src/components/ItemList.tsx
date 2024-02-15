import Item from "./Item";

type Cheeses = {
  name: string;
  photo: string;
  isAdmin?: boolean;
}[];

const ItemList = ({ cheeses }: { cheeses: Cheeses }) => {
  return (
    <div>
      {cheeses.map((cheese) => {
        return <Item cheese={cheese} />;
      })}
    </div>
  );
};

export default ItemList;
