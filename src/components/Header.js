import React, { Component } from "react";
import { Link } from "react-router-dom";
const inline = {
  display: "inline"
};
class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li style={inline}>
              <Link to="Home">
                <span>Home</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="About">
                <span>About Me</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="#Skills">
                <span>Skills</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="Features">
                <span>Features</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="Projects">
                <span>Projects</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="Testimonial">
                <span>Testimonial</span>
              </Link>
            </li>
            <li style={inline}>
              <Link to="Contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <a href="/" className="cd-close-menu">
            <span>Close</span>
          </a>
        </nav>

        {/* <div className="div-menu">
          <header className="cd-header">
            <Link className="cd-menu-trigger" to="#main-nav">
              <span />
            </Link>
          </header>
        </div> */}
      </div>
    );
  }
}

export default Header;
