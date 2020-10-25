import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import CreateCatadorForm from './pages/CreateCatadorForm'
import ObjectivesPage from './pages/Objectives'
import SDG13info from './pages/SDG13info'
import SDG15info from './pages/SDG15info'
import LoginPage from './pages/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={InitialPage} path="/" exact />
        <Route component={CreateCatadorForm} path="/catador"  />
        <Route component={ObjectivesPage} path="/Objectives"/>
        <Route component={SDG13info} path="/EnvironmentalImpact"/>
        <Route component={SDG15info} path="/Partners"  />
        <Route component={LoginPage} path="/login"  />
      </Switch>
    </BrowserRouter>
  );
}
