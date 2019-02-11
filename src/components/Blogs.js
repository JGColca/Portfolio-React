import React, { Component } from "react";

import "../assets/css/style.css";
import "../assets/css/responsive.css";
import blogs_image from "../assets/images/blogshouston-min.jpg";
import single_blogs_img from "../assets/images/sblog1.jpg";

class Blogs extends Component {
  render() {
    return (
      <section id="blogs" class="blogs rotleft">
        <img id="blogs_image" src={blogs_image} alt="" />
        <div class="features_overlay">
          <div class="container bangbang">
            <div class="row">
              <div class="head_title text-center">
                <h2>
                  <i class="fa fa-star" /> Blogs <i class="fa fa-star" />
                </h2>
              </div>
              <div class="main_blogs">
                <div class="main_blogs_content">
                  <div class="col-sm-6 blogleft clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 blogright clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main_blogs_content">
                  <div class="col-sm-6 blogleft clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 blogright clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main_blogs_content">
                  <div class="col-sm-6 blogleft clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 blogright clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main_blogs_content">
                  <div class="col-sm-6 blogleft clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 blogright clearfix">
                    <div class="single_blogs clearfix">
                      <div class="single_blogs_img clearfix">
                        <img src={single_blogs_img} alt="" />
                        <div class="dates">
                          <span>12</span> Aug
                        </div>
                      </div>
                      <div class="single_blogs_details">
                        <h5>
                          <a href="/">
                            Lorem ipsum dolor sit amet, consectetur...
                          </a>
                        </h5>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit...
                        </p>
                      </div>
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

export default Blogs;
