import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  navItems: {
    float: "right",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(100),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.icon}>
            Company name
          </Typography>
          <nav>
            <NavLink
              to="/"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <Typography variant="button" className={classes.nameText}>
                Home
              </Typography>
            </NavLink>
            <NavLink
              to="/product"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <Typography variant="button" className={classes.title}>
                Products
              </Typography>
            </NavLink>
            <NavLink
              to="/about"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <Typography variant="button" className={classes.nameText}>
                Cart
              </Typography>
            </NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
