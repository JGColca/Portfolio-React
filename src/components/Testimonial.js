import React, { Component } from "react";

import "../assets/css/style.css";
import "../assets/css/responsive.css";
import testimonial_image from "../assets/images/testimonialmic-min.jpg";

class Testimonial extends Component {
  render() {
    return (
      <section id="testimonial" className="testimonial rotright">
        <img id="testimonial_image" src={testimonial_image} alt="" />
        <div className="features_overlay">
          <div className="container chikobiko">
            <div className="row">
              <div
                className="head_title text-center wow pulse"
                data-wow-duration="1s"
              >
                <h2>
                  <i className="fa fa-star" /> Testimonial{" "}
                  <i className="fa fa-star" />
                </h2>
              </div>
              <div className="main_testimonial wow text-center">
                <div className="main_testimonial_content">
                  <div className="single_testimonial">
                    <div className="col-md-6">
                      <h3>Juskteez Vu</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation...
                      </p>
                      <div className="separator" />
                      <h3>Juskteez Vu</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur....
                      </p>
                    </div>
                  </div>
                  <div className="single_testimonial">
                    <div className="col-md-6">
                      <h3>Juskteez Vu</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation...
                      </p>
                      <div className="separator" />
                      <h3>Juskteez Vu</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur....
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

export default Testimonial;
