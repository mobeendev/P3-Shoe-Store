import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import Heading from "./Heading";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Shoes from "./../shoes.json";

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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Product() {
  const classes = useStyles();
  console.log(Shoes);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Grid item key={keyName} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={shoe.img}
                  title={shoe.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {shoe.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                  <Button size="small" color="primary">
                    Add
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import Shoes from "./../shoes.json";

// function Product() {
//   return (
//     <div>
//       <h1>Welcome to Product</h1>
//       <div className="productContainer">
//         {Object.keys(Shoes).map((keyName) => {
//           const shoe = Shoes[keyName];
//           return (
//             <Link key={keyName} className="link" to={`/product/${keyName}`}>
//               <h4>{shoe.name}</h4>
//               <img src={shoe.img} height={150} alt="shoe" />
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Product;
