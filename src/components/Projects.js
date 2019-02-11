import React, { Component } from "react";

import "../assets/css/style.css";
import "../assets/css/responsive.css";
import drivinghome_image from "../assets/images/drivinghome-min.jpg";
import coolautumn_image from "../assets/images/m2sistersbgimg-min.jpg";
import tinyforest_image from "../assets/images/testApp-min.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <section id="drivinghome" class="drivinghome rotleft">
          <div id="projects" />
          <img id="drivinghome_image" src={drivinghome_image} alt="" />
          <div class="features_overlay">
            <div class="container bangbang">
              <div class="row">
                <div class="head_title text-center">
                  <h2>
                    <i class="fa fa-star" /> Project <i class="fa fa-star" />
                  </h2>
                </div>
                <div class="main_drivinghome">
                  <div class="col-md-5">
                    <div
                      class="single_drivinghome wow fadeInRight"
                      data-wow-duration="2s"
                    >
                      <div class="date">11/19/2018</div>
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
                        class="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/JGColca/DCRide"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-white project-code"
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

        <section id="coolautumn" class="coolautumn rotright">
          <img id="coolautumn_image" src={coolautumn_image} alt="" />
          <div class="features_overlay">
            <div class="container chikobiko">
              <div class="row">
                <div class="head_title text-center">
                  <h2>
                    <i class="fa fa-star" /> Project <i class="fa fa-star" />
                  </h2>
                </div>
                <div class="main_coolautumn">
                  <div class="col-md-offset-7">
                    <div
                      class="single_coolautumn text-right wow fadeInLeft"
                      data-wow-duration="1.5s"
                    >
                      <div class="date">Coming Soon</div>
                      <h3>
                        M<sup>2</sup> Sisters
                      </h3>
                      <blockquote class="blockquote-reverse">
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
                        class="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-white project-code"
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

        <section id="tinyforest" class="tinyforest rotleft">
          <img id="tinyforest_image" src={tinyforest_image} alt="" />
          <div class="features_overlay">
            <div class="container bangbang">
              <div class="row">
                <div class="head_title text-center">
                  <h2>
                    <i class="fa fa-star" /> Project <i class="fa fa-star" />
                  </h2>
                </div>
                <div class="main_tinyforest">
                  <div class="col-md-5">
                    <div
                      class="single_tinyforest wow fadeInRight"
                      data-wow-duration="1.5s"
                    >
                      <div class="date">10/28/2018</div>
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
                        class="btn btn-white project-site"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/jcattanach/quiz-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-white project-code"
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
