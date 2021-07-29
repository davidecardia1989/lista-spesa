import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Carrello from "./pages/Carrello";
import Product from "./pages/Product";
import Homepage from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}>
        {/* TODO: REDIRECT se logged true */} <Redirect to="/homepage" />
      </Route>
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/carrello" component={Carrello} />
    </Switch>
  );
}

export default App;
