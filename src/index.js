import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "./components/common/error/NoMatch";
import Login from "./components/popUp/loginPopUp";

let isLogin = store.getState().login.isUserLoggedin;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
