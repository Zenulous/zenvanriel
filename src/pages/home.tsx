import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import DefaultFooter from "../components/DefaultFooter";
import certificationDeveloper from "../../static/assets/certificationDeveloper.png";
import certificationDevOps from "../../static/assets/certificationDevOps.png";
import certificationAI from "../../static/assets/certificationAI.png";
import certificationArchitect from "../../static/assets/certificationArchitect.png";
import certificationDataScientist from "../../static/assets/certificationDataScientist.png";
import certificationTrainer from "../../static/assets/certificationTrainer.png";
import {styled} from "styletron-react";

const CertificateIcon = styled("img", {width: "175px"});
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
            I like to work with software across different technology stacks.
            Using TypeScript and/or C# I enjoy rapidly developing cloud native
            applications on Azure. Alternatively, I am also a fan of using
            Python for the occasional data related project.
          </p>
          <br />
          <h2>Current Certifications</h2>
          <h4>Software Development</h4>
          <CertficateContainer>
            <CertificateIcon src={certificationDeveloper}></CertificateIcon>
            <CertificateIcon src={certificationDevOps}></CertificateIcon>
            <CertificateIcon src={certificationAI}></CertificateIcon>
          </CertficateContainer>
          <h4>Software Architecture</h4>
          <CertficateContainer>
            <CertificateIcon src={certificationArchitect}></CertificateIcon>
          </CertficateContainer>
          <h4>Data Science</h4>
          <CertficateContainer>
            <CertificateIcon src={certificationDataScientist}></CertificateIcon>
          </CertficateContainer>
          <h4>Miscellaneous</h4>
          <CertficateContainer>
            <CertificateIcon src={certificationTrainer}></CertificateIcon>
          </CertficateContainer>
        </div>
        <DefaultFooter />
      </div>
    );
  }
}
