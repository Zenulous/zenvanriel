import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const SiteName = styled.div`
  display: flex;
  margin: 0;
  gap: 10px;
  font-size: 18px;
  align-items: center;
  margin-left: 25px;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin-right: 25px;
  padding: 0;
`;

const MenuItem = styled.li`
  font-size: 14px;
`;

export function TopBar() {
  return (
    <TopBarContainer>
      <SiteName>
        <StaticImage
          src="../images/logo.png"
          alt="Zen Icon"
          placeholder="blurred"
          height={50}
        />
        Zen van Riel
      </SiteName>

      <MenuItems>
        <MenuItem>Professional Portfolio</MenuItem>
        <MenuItem>Browser Game</MenuItem>
        <MenuItem>Certifications</MenuItem>
      </MenuItems>
    </TopBarContainer>
  );
}
