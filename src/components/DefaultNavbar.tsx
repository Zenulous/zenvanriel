import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import favIcon from "../images/favicon.png";
import brainyIcon from "../images/brainy.png";
import "bootstrap/dist/css/bootstrap.css";
import {paths} from "../pages/index";

export default function DefaultNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <img className="default-icon" src={favIcon}></img>
      <Navbar.Brand href={paths.home}>Zen van Riel</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={paths.home}>Home</Nav.Link>
        <Nav.Link href={paths.brainyBot}>
          <img className="default-icon" src={brainyIcon}></img>Brainy
        </Nav.Link>
        <Nav.Link href={paths.browserGame}>Browser Game</Nav.Link>
      </Nav>
    </Navbar>
  );
}
