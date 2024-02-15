type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

const Item = ({ cheese }: { cheese: Cheese }) => {
  return (
    <div>
      <img src={cheese.photo} alt={cheese.name} />
      <p>{cheese.name}</p>
    </div>
  );
};

export default Item;
