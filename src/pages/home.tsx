import React from "react";
import {RouteComponentProps} from "@reach/router";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import DefaultFooter from "../components/DefaultFooter";
import certificationDeveloper from "../../static/assets/certificationDeveloper.png";
import certificationDevOps from "../../static/assets/certificationDevOps.png";
import {styled} from "styletron-react";

const CertificateIcon = styled("img", {height: "100%", float: "left"});
const CertficateContainer = styled("div", {height: "18vh", width: "100%"});

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
        <div className="container">
          <h1>Home</h1>
          <p>
            Welcome to my website. This site serves as a portfolio and a place
            for me to post about some of my projects and work.
          </p>
          <br />
          <h2>At a glance</h2>
          <p>
            Currently active as a Cloud Solutions Architect intern at Microsoft
            and finishing up my bachelor in Artificial Intelligence. I like to
            work with software across different technology stacks. Currently my
            main forte is programming in TypeScript to rapidly develop cloud
            native apps on Azure.
          </p>
          <br />
          <h2>Current Certifications</h2>
          <h3>Developer Oriented</h3>
          <CertficateContainer>
            <CertificateIcon src={certificationDeveloper}></CertificateIcon>
            <CertificateIcon src={certificationDevOps}></CertificateIcon>
          </CertficateContainer>
        </div>
        <DefaultFooter />
      </div>
    );
  }
}
