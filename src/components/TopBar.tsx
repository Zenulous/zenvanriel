import { Link } from "gatsby";
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
  font-size: 17px;
  position: relative;
  margin-left: 10px;
  padding-right: 10px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0056b3;
    top: 50%;

    right: -8px;
    transform: translateY(-50%);
  }
`;

export function TopBar() {
  return (
    <TopBarContainer>
      <Link to="/">
        <SiteName>
          <StaticImage
            src="../images/logo.png"
            alt="Zen Icon"
            placeholder="blurred"
            height={50}
          />
          Zen van Riel
        </SiteName>
      </Link>

      <MenuItems>
        <MenuItem>
          <Link to="/">Professional Timeline</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/browser-game">Browser Game</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/certifications">Certifications</Link>
        </MenuItem>
      </MenuItems>
    </TopBarContainer>
  );
}
