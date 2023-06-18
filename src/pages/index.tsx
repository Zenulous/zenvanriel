import React from "react";
import { SEO } from "../components/seo";
import { ProfessionalTimeline } from "../components/ProfessionalTimeline";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import ZenSays from "../components/ZenSays";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  word-wrap: break-word;
`;

export default function IndexPage() {
  return (
    <Layout>
      <PageContainer>
        <ZenSays
          content={
            <div>
              👋 Hello! I'm Zen, a software engineer working on implementing AI
              & ML in impactful ways. Next to that I am also an Azure cloud
              expert. On this site, you can have a look at what I've learned and
              done over the years. Below you can check out my professional
              timeline: hover over the different items to learn more!
            </div>
          }
        />
        <h1>Professional Timeline</h1>
        <ProfessionalTimeline />
      </PageContainer>
    </Layout>
  );
}

export const Head = () => <SEO />;
