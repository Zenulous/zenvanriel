import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 95%;
  margin: 53.44px 0 32px 0;
  word-break: normal;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Zen = styled.div`
  display: flex;
  flex: 1 0 20%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ZenText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function ZenSays({ content }: { content: JSX.Element }) {
  return (
    <Container>
      <Zen>
        <StaticImage
          src="../images/zen.jpeg"
          alt="Picture of Zen van Riel"
          placeholder="blurred"
          height={75}
          style={{ borderRadius: "25px" }}
        />
        <ZenText>
          <b>Zen says...</b>
        </ZenText>
      </Zen>
      <div>{content}</div>
    </Container>
  );
}
