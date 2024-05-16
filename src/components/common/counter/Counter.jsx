import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Counter = ({ restar, sumar, contador, onAdd }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <RemoveIcon onClick={restar} variant="outlined"></RemoveIcon>
        <h2>{contador}</h2>
        <AddIcon onClick={sumar}></AddIcon>
        <Button
          onClick={() => onAdd(contador)}
          variant="contained"
          color="success"
          size="small"
        >
          Agregar al carrito
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar más..."
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </div>
  );
};

export default Counter;
