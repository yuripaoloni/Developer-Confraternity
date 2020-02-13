import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

// Set global header
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect tells React that the component needs to do something after render
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //the [] tells React that the effect doesn’t depend on any values from props or state

  return (
    // Provider makes the Redux store available to any nested components that have been wrapped in the connect() function.
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
