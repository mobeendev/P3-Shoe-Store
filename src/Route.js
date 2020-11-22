import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";
import Product from "./Pages/Product";
import ProductItem from "./Components/ProductItem";
import NavBar from "./Components/Navbar";
import { CartProvider } from "./context/CartContext";
function RouteConfig() {
  return (
    <div>
      <Router>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductItem} />
            <Route path="*" component={() => <h2>404 Not Found</h2>} />
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default RouteConfig;
