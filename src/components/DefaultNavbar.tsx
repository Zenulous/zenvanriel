import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import favIcon from "../images/favicon.png";
import brainyIcon from "../images/brainy.png";
import {Link} from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

export default function DefaultNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <img className="default-icon" src={favIcon}></img>
      <Link to="/">
        <Navbar.Brand>Zen van Riel</Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/browser-game" className="nav-link">
          Browser Game
        </Link>
        <Link to="/browser-game" className="nav-link">
          Test Automation
        </Link>
        <Link to="/browser-game" className="nav-link">
          Miscellaneous Projects
        </Link>
        <Link to="/brainy-bot" className="nav-link">
          Brainy
          <img className="default-icon" src={brainyIcon} />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
