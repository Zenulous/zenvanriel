import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { styled } from "styletron-react";
import gatsbySvg from "../../static/icons/gatsby.svg";

const FooterDiv = styled("footer", {
  backgroundColor: "#212529",
  position: "fixed",
  bottom: "0px",
  width: "100%",
  height: "50px",
});

const FooterText = styled("span", {
  lineHeight: "50px",
  float: "right",
  color: "white",
});

const StyledImg = styled("img", {
  marginRight: "10px",
  marginLeft: "30px",
  height: "100%",
  float: "right",
});

export default function DefaultFooter() {
  return (
    <FooterDiv>
      <StyledImg src={gatsbySvg}></StyledImg>
      <FooterText>This site was programmed by me using Gatsby</FooterText>
    </FooterDiv>
  );
}
