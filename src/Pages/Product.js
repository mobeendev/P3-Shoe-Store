import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Shoes from "../shoes.json";
import Container from "@material-ui/core/Container";
import ProductItem from "../Components/ProductItem";
import Typography from "@material-ui/core/Typography";

export default function Product() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.top}>
        <Typography variant="h6" align="center" gutterBottom>
          Best Shoes List
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Write something here to about this shop!
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {Object.keys(Shoes).map((keyName) => {
            return <ProductItem key={keyName} item={Shoes[keyName]} />;
          })}
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  top: {
    paddingTop: theme.spacing(3),
  },
}));
