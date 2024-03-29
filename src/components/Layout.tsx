import React from "react";
import { TopBar } from "./TopBar";
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
