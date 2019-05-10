import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Storepicker from "../Storepicker";
import App from "../App";
import NotFound from "../NotFound";

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Storepicker} />
        <Route
          exact
          path="/store/:id"
          component={App}
          //   render={routeProps => <App {...routeProps} city={city.city} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
