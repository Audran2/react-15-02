type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

const Item = ({ cheese }: { cheese: Cheese }) => {
  return (
    <div>
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
