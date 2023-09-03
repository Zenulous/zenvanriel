import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import ZenSays from "../components/ZenSays";
import { SEOHead } from "../components/SEOHead";

const CertficateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CertificatesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export default function Certifications() {
  return (
    <Layout>
      <ZenSays
        content={
          <div>
            These are the certifications I've earned throughout my professional
            career. They've allowed me to gain expertise across the entire
            software development stack, which means I can own an application's
            development end-to-end.
          </div>
        }
      ></ZenSays>
      <CertficateContainer>
        <h2>Current Certifications</h2>
        <CertificatesRow>
          <CertificateItem>
            <h4>Software Development</h4>
            <StaticImage
              src="../images/certifications/certificationDeveloper.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
            <StaticImage
              src="../images/certifications/certificationDevOps.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
            <StaticImage
              src="../images/certifications/certificationDevOps.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
          </CertificateItem>
          <CertificateItem>
            <h4>Data Science</h4>
            <StaticImage
              src="../images/certifications/certificationDataEngineer.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
            <StaticImage
              src="../images/certifications/certificationDataScientist.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
          </CertificateItem>
          <CertificateItem>
            <h4>Software Architecture</h4>
            <StaticImage
              src="../images/certifications/certificationArchitect.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />{" "}
            <StaticImage
              src="../images/certifications/certificationCKAD.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
          </CertificateItem>
          <CertificateItem>
            <h4>Miscellaneous</h4>
            <StaticImage
              src="../images/certifications/certificationAdministrator.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />{" "}
            <StaticImage
              src="../images/certifications/certificationTrainer.png"
              alt="Certification Icon"
              placeholder="blurred"
              width={250}
            />
          </CertificateItem>
        </CertificatesRow>
      </CertficateContainer>
    </Layout>
  );
}

export const Head = () => <SEOHead />;
