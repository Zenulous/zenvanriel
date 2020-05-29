import React from "react";
import {RouteComponentProps} from "@reach/router";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";

export default class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Metadata
          title={"Zen van Riel - Home Page"}
          description={
            "This site serves as a small portfolio to post about some of my work."
          }
        />
        <DefaultNavbar />
        <p>home</p>
      </div>
    );
  }
}
