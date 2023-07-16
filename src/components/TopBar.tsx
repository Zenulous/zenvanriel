import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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

const MenuItems = styled.ul<{ isMenuOpen: boolean }>`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin-right: 25px;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    position: absolute;
    top: 80%;
    right: 0;
    background-color: #f1f1f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    width: 100%;
    max-width: 200px; /* Add this line */
    overflow-x: hidden; /* Add this line */
  }
`;

const MenuItem = styled.li<{ isMenuOpen: boolean }>`
  font-size: 17px;
  position: relative;
  margin-left: 10px;
  padding-right: 10px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    width: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "6px")};
    height: 6px;
    border-radius: 50%;
    background-color: #0056b3;
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  
  }
`;

const HamburgerMenu = styled.div<{ isMenuOpen: boolean }>`
  display: none;
  margin-right: 25px;
  fill: #0056b3;
  cursor: pointer;

  @media (max-width: 768px) {
    align-self: flex-end;
    display: inline;
    animation: ${({ isMenuOpen }) => (isMenuOpen ? rotateAnimation : "none")}
      0.5s forwards;
  }
`;

export function TopBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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

      <HamburgerMenu isMenuOpen={isMenuOpen} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32px"
          height="32px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
        </svg>
      </HamburgerMenu>
      <MenuItems isMenuOpen={isMenuOpen}>
        <MenuItem isMenuOpen={isMenuOpen}>
          <Link to="/">Professional Timeline</Link>
        </MenuItem>
        <MenuItem isMenuOpen={isMenuOpen}>
          <Link to="/browser-game">Browser Game</Link>
        </MenuItem>
        <MenuItem isMenuOpen={isMenuOpen}>
          <Link to="/certifications">Certifications</Link>
        </MenuItem>
        <MenuItem isMenuOpen={isMenuOpen}>
          <a href="https://skillscape.app">SkillScape</a>
        </MenuItem>
      </MenuItems>
    </TopBarContainer>
  );
}
