import React, { Component } from "react";

import features_image from "../assets/images/featureshats-min.jpg";

class Features extends Component {
  render() {
    return (
      <section id="features" className="features rotright">
        <img id="features_image" src={features_image} alt="" />
        <div className="features_overlay">
          <div className="container chikobiko">
            <div className="row">
              <div
                className="head_title text-center wow pulse"
                data-wow-duration="1.5s"
              >
                <h2>
                  <i className="fa fa-star" /> Features{" "}
                  <i className="fa fa-star" />
                </h2>
              </div>
              <div className="main_features wow pulse" data-wow-duration="2s">
                <div className="main_features_content">
                  <div className="single_features">
                    <div className="col-md-6">
                      <h3 className="featuresH2Span">
                        <i className="fa fa-file-code-o" />
                        <span>Front-End Development</span>
                      </h3>
                      <p>
                        Knowledge of HTML, CSS, and JS along with various
                        frameworks and libraries to convert website design into
                        usable and interactive code.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="featuresH2Span">
                        <i className="fa fa-file-code-o" />
                        <span>Back-End Development</span>
                      </h3>
                      <p>
                        Server-side logic including connections to databases,
                        RESTful APIs, and algorithms.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_features">
                    <div className="col-md-6">
                      <h3 className="featuresH2Span">
                        <i className="fa fa-file-code-o" />
                        <span>Database Design</span>
                      </h3>
                      <p>
                        Analytically minded and able to perform process mapping
                        quickly. Able to visualize structure and communicate
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="featuresH2Span">
                        <i className="fa fa-file-code-o" />
                        <span>Laboratory Information Managment Systems</span>
                      </h3>
                      <p>
                        Experience as client during implementation of a LIMS.
                        Able to bridge communication and jargon gap between
                        developer and user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
