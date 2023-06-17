import React from "react";
import { SEO } from "../components/seo";
import { ProfessionalTimeline } from "../components/ProfessionalTimeline";
import { TopBar } from "../components/TopBar";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export default function IndexPage() {
  return (
    <main>
      <TopBar />
      <PageContainer>
        <h1>Professional Timeline</h1>
        <ProfessionalTimeline />
      </PageContainer>
    </main>
  );
}

export const Head = () => <SEO />;
