const Item = (cheese) => {
  return (
    <div>
      <img src={cheese.photo} alt={cheese.name} />
      <p>{cheese.name}</p>
    </div>
  );
};

export default Item;
