import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { CartContext } from "../context/CartContext";
function ProductItem({ item }) {
  const classes = useStyles();
  const { addItem } = React.useContext(CartContext);

  if (!item) return <h2>Product Not Found!</h2>;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.img}
          title={item.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h2" component="h2">
            {item.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActionContent}>
          <Button size="medium" variant="contained" color="default">
            Remove
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={() => addItem(item.sku)}
          >
            Add
          </Button>
          $ {item.price}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductItem;

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActionContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
