import { ProductCard } from "../../common/ProductCard/ProductCard";
import { Grid } from "@mui/material";

const ItemList = ({ items, error }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Grid container spacing={2} justifyContent="center">
        {items.map(({ id, title, description, price, img }) => {
          return (
            <Grid item key={id} xs={12} sm={6} md={3}>
              <ProductCard
                sx={{
                  flex: 1,
                  overflow: "auto",
                  border: "none",
                  boxShadow: "none",
                }}
                key={id}
                title={title}
                description={description}
                price={price}
                img={img}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
