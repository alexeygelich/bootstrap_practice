import React, { Suspense } from "react";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../../pages";
import { About } from "../../pages";
import { Contacts } from "../../pages";
import Footer from "../Footer";

export default function App({ isLoading, message }) {
  return (
    <>
      <Router>
        <NavBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}
