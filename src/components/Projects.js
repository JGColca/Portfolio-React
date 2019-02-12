import React, { Component } from "react";

import drivinghome_image from "../assets/images/drivinghome-min.jpg";
import coolautumn_image from "../assets/images/m2sistersbgimg-min.jpg";
import tinyforest_image from "../assets/images/testApp-min.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <section id="drivinghome" className="drivinghome rotleft">
          <div id="projects" />
          <img id="drivinghome_image" src={drivinghome_image} alt="" />
          <div className="features_overlay">
            <div className="container bangbang">
              <div className="row">
                <div className="head_title text-center">
                  <h2>
                    <i className="fa fa-star" /> Project{" "}
                    <i className="fa fa-star" />
                  </h2>
                </div>
                <div className="main_drivinghome">
                  <div className="col-md-5">
                    <div
                      className="single_drivinghome wow fadeInRight"
                      data-wow-duration="2s"
                    >
                      <div className="date">11/19/2018</div>
                      <h3>DC Ride</h3>
                      <blockquote>
                        <p>
                          App for a driverless taxi company. Customers request
                          taxi and closest one is dispatched. Customers provided
                          estimates for taxi arrival and trip duration. Admins
                          manage taxis and view transactions. (Taxis driven by
                          admin account)
                        </p>
                        <br />
                        <p>
                          HTML, CSS, Bootstrap, JavaScript, Google Maps API,
                          YouTube API, jQuery, node.js (& express, session,
                          mustache, cors, body-parser, bcrypt, sequelize and
                          sequelize-socket.io packages) and a PostgreSQL
                          database hosted by ElephantSQL.
                        </p>
                      </blockquote>
                      <a
                        href="http://dcride.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/JGColca/DCRide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-code"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coolautumn" className="coolautumn rotright">
          <img id="coolautumn_image" src={coolautumn_image} alt="" />
          <div className="features_overlay">
            <div className="container chikobiko">
              <div className="row">
                <div className="head_title text-center">
                  <h2>
                    <i className="fa fa-star" /> Project{" "}
                    <i className="fa fa-star" />
                  </h2>
                </div>
                <div className="main_coolautumn">
                  <div className="col-md-offset-7">
                    <div
                      className="single_coolautumn text-right wow fadeInLeft"
                      data-wow-duration="1.5s"
                    >
                      <div className="date">Coming Soon</div>
                      <h3>
                        M<sup>2</sup> Sisters
                      </h3>
                      <blockquote className="blockquote-reverse">
                        <p>
                          COMIN SOON: An e-commerce site powered by React.js and
                          Redux.js. Site will sell crafts designed and made by
                          my wife, Mona, and her sister, Angeli.{" "}
                        </p>
                      </blockquote>
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-code"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tinyforest" className="tinyforest rotleft">
          <img id="tinyforest_image" src={tinyforest_image} alt="" />
          <div className="features_overlay">
            <div className="container bangbang">
              <div className="row">
                <div className="head_title text-center">
                  <h2>
                    <i className="fa fa-star" /> Project{" "}
                    <i className="fa fa-star" />
                  </h2>
                </div>
                <div className="main_tinyforest">
                  <div className="col-md-5">
                    <div
                      className="single_tinyforest wow fadeInRight"
                      data-wow-duration="1.5s"
                    >
                      <div className="date">10/28/2018</div>
                      <h3>Test Creator</h3>
                      <blockquote>
                        <p>
                          App for teachers to create multiple-choice tests.
                          Teachers can send codes to students which allows
                          students to take a specific test. Upon student
                          submission, the test is graded and the student shown
                          the score.
                        </p>
                        <br />
                        <p>HTML, CSS, JavaScript, and a Firebase database.</p>
                      </blockquote>
                      <a
                        href="http://test-creator.surge.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/jcattanach/quiz-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white project-code"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
