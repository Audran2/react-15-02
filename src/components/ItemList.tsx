import Item from "./Item";

type Cheeses = {
  name: string;
  photo: string;
  isAdmin?: boolean;
}[];

const ItemList = ({ cheeses }: { cheeses: Cheeses }) => {
  return (
    <div>
      <h1>Fromages</h1>
      {cheeses.map((cheese) => (
        <Item cheese={cheese} />
      ))}
    </div>
  );
};

export default ItemList;
