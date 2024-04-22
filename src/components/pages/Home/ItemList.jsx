import { ProductCard } from "../../common/ProductCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {items.map(({ id, title, description, price, img }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
          />
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
