import * as React from "react";
import {Router} from "@reach/router";
import Home from "./home";
import BrowserGame from "./browser-game";
import BrainyBot from "./brainy-bot";

export const paths = {
  home: "/",
  browserGame: "/browser-game",
  brainyBot: "/brainy-bot",
};
export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Home path={paths.home} />
        <BrainyBot path={paths.brainyBot} />
        <BrowserGame path={paths.browserGame} />
      </Router>
    );
  }
}
