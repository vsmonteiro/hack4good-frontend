import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import CreateCatadorForm from './pages/CreateCatadorForm'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={InitialPage} path="/" exact />
        <Route component={CreateCatadorForm} path="/catador"  />
      </Switch>
    </BrowserRouter>
  );
}
