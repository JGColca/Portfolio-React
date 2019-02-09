import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row">
              <div
                className="main_footer text-center wow fadeInUp"
                data-wow-duration="2s"
              >
                <p>
                  Base theme made with <i className="fa fa-heart" /> by{" "}
                  <a href="http://bootstrapthemes.co">Bootstrap Themes</a>
                </p>
                <p>Modified and enhanced by Joseph G. Colca</p>
                <p>All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>

        <div className="scrollup">
          <Link to="#">
            <i className="fa fa-chevron-up" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
