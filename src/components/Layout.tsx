import React from "react";
import { TopBar } from "./TopBar";
import { SEO } from "./seo";
import styled from "styled-components";

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TopBar />
      <Content>{children}</Content>
    </main>
  );
}

export const Head = () => {
  <>
    <SEO />
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=zoom, orientation=portrait"
    />
  </>;
};
