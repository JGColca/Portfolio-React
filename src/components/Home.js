import React, { Component } from "react";
import { Link } from "react-router-dom";

import home_image from "../assets/images/homeimg-min.jpg";
import portfolio_logo from "../assets/images/portfolio_logo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="home" className="home">
          <img id="home_image" src={home_image} alt="" />
          <div className="home_overlay">
            <div className="container">
              <div className="row">
                <div
                  className="main_home_content text-center wow fadeInUp"
                  data-wow-duration="1.5s"
                >
                  <div className="logo_img">
                    <img
                      src={portfolio_logo}
                      alt="Joseph G. Colca Portfolio Logo"
                    />
                  </div>
                  <h2>Joseph G. Colca</h2>
                  <div className="separator" />
                  <p>Software Engineer based in Cypress, Texas</p>
                  <Link
                    to="JosephGColcaResume.pdf"
                    target="_blank"
                    className="btn btn-lg"
                  >
                    Check Out My Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
