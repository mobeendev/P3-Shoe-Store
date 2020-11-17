import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Shoes from "./../shoes.json";
import ProductItem from "./ProductItem";

export default function Product() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {Object.keys(Shoes).map((keyName) => {
          return <ProductItem key={keyName} item={Shoes[keyName]} />;
        })}
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));
