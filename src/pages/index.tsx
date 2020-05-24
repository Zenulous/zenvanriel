import * as React from "react";
import {Router} from "@reach/router";
import Home from "./home";
import BrowserGame from "./browser-game";

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <BrowserGame path="/browser-game" />
      </Router>
    );
  }
}
