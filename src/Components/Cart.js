import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { CartContext } from "../context/CartContext";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
export default function Cart() {
  const classes = useStyles();
  const {
    removeItem,
    cartGroupedByItems,
    totalPrice,
    cart,
    addItem,
  } = React.useContext(CartContext);

  return (
    <Container className={classes.container} maxWidth="md">
      <List className={classes.root}>
        {cartGroupedByItems.length ? (
          cartGroupedByItems.map((product, index) => (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={product.img} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Price - {product.price}
                    </Typography>

                    <Typography component="span" className={classes.inline}>
                      Total Items - {product.quantity}
                    </Typography>
                  </React.Fragment>
                }
              />
              <IconButton
                aria-label="delete"
                onClick={() => removeItem(product.sku)}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => addItem(product.sku)}
              >
                <AddIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <List component="nav" aria-label="secondary">
            <ListItem>
              <Typography component="span" className={classes.inline}>
                No items found!
              </Typography>
            </ListItem>
          </List>
        )}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem>
          <Typography component="span" className={classes.inline}>
            Total Price
          </Typography>
          <ListItemText primary=" :" />
          <Typography component="span" className={classes.inline}>
            {totalPrice}
          </Typography>
        </ListItem>
      </List>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));
