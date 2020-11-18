import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Components/Footer";
import Heading from "../Components/Heading";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Shoes from "./../shoes.json";
import ProductItem from "../Components/ProductItem";

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Heading />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {Object.keys(Shoes).map((keyName) => {
            return <ProductItem key={keyName} item={Shoes[keyName]} />;
          })}
        </Grid>
      </Container>
      <Container maxWidth="md" component="main"></Container>

      {/* Footer */}
      <Footer
        description="Something here to give the footer a purpose!"
        title="Footer"
      />
      {/* End footer */}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
