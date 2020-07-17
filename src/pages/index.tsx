import * as React from "react";
import Home from "./home";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default class Root extends React.Component {
  render() {
    return <Home path="./" />;
  }
}
