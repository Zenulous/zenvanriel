import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import favIcon from "../images/favicon.png";
import brainyIcon from "../images/brainy.png";
import "bootstrap/dist/css/bootstrap.css";

export default function DefaultNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <img className="default-icon" src={favIcon}></img>
      <Navbar.Brand href="/">Zen van Riel</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="/browser-game">Browser Game</Nav.Link>
        <Nav.Link href="/brainy-bot">
          <img className="default-icon" src={brainyIcon}></img>Brainy
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
