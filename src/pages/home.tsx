import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import DefaultFooter from "../components/DefaultFooter";
import certificationDeveloper from "../../static/assets/certificationDeveloper.png";
import certificationDevOps from "../../static/assets/certificationDevOps.png";
import certificationAI from "../../static/assets/certificationAI.png";
import certificationArchitect from "../../static/assets/certificationArchitect.png";
import {styled} from "styletron-react";

const CertificateIcon = styled("img", {width: "250px"});
const CertficateContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});

export default class Home extends React.Component {
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
          <h3>Software Development</h3>
          <CertficateContainer>
            <CertificateIcon src={certificationDeveloper}></CertificateIcon>
            <CertificateIcon src={certificationDevOps}></CertificateIcon>
            <CertificateIcon src={certificationAI}></CertificateIcon>
          </CertficateContainer>
          <h3>Software Architecture</h3>
          <CertficateContainer>
            <CertificateIcon src={certificationArchitect}></CertificateIcon>
          </CertficateContainer>
        </div>
        <DefaultFooter />
      </div>
    );
  }
}
