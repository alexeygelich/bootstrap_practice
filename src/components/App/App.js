import React, { Suspense } from "react";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../../pages";
import { About } from "../../pages";
import { Contacts } from "../../pages";

export default function App({ isLoading, message }) {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}
