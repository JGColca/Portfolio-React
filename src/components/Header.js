import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    let cdMenuTrigger = document.querySelector(".cd-menu-trigger"),
      mainNav = document.getElementById("main-nav"),
      cdCloseMenu = document.querySelector(".cd-close-menu");

    cdMenuTrigger.addEventListener("click", function(event) {
      event.preventDefault();
      mainNav.classList.add("is-visible");
    });
    cdCloseMenu.addEventListener("click", function(event) {
      event.preventDefault();
      mainNav.classList.remove("is-visible");
    });
  }
  render() {
    return (
      <div>
        <nav id="main-nav">
          <ul>
            <li>
              <NavLink className="navLink" to="/">
                <span className="navSpan">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                <span className="navSpan">About Me</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/features">
                <span className="navSpan">Features</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/projects">
                <span className="navSpan">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/testimonial">
                <span className="navSpan">Testimonial</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/blogs">
                <span className="navSpan">Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/contact">
                <span className="navSpan">Contact</span>
              </NavLink>
            </li>
          </ul>
          <NavLink to="#" className="cd-close-menu">
            <span>Close</span>
          </NavLink>
        </nav>

        <div className="div-menu">
          <header className="cd-header">
            <text className="menuText">Menu</text>
            <NavLink className="cd-menu-trigger" to="#main-nav">
              <span />
            </NavLink>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
