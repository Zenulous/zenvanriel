import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import logoIcon from "../../static/icons/logo.svg";
import brainyIcon from "../../static/icons/brainy.svg";
import {Link} from "gatsby";
import "bootstrap/dist/css/bootstrap.css";
import {styled} from "styletron-react";

const StyledAnchor = styled("a", {
  padding: 0,
  marginLeft: "10px",
});

export default function DefaultNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <img className="default-icon" src={logoIcon}></img>
      <Link to="/">
        <Navbar.Brand>Zen van Riel</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/browser-game" className="nav-link">
          Browser Game
        </Link>
        <Link to="/test-automation" className="nav-link">
          Test Automation
        </Link>
        <Link to="/coding-repositories" className="nav-link">
          Miscellaneous Projects
        </Link>
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
        <Link to="/brainy-bot" className="nav-link">
          <img className="default-icon" src={brainyIcon} />
          Brainy
        </Link>
      </Navbar.Collapse>

      <StyledAnchor
        href="https://www.linkedin.com/in/zen-van-riel/"
        className="nav-link fab fa-linkedin fa-4x anchor"
      ></StyledAnchor>

      <StyledAnchor
        href="https://www.github.com/zenulous"
        className="nav-link fab fa-github anchor"
      ></StyledAnchor>
    </Navbar>
  );
}
