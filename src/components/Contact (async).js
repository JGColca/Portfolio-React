import React, { Component } from "react";
import axios from "axios";
import { ReCaptcha } from "react-recaptcha-google";

import "../assets/css/style.css";
import "../assets/css/responsive.css";
import contact_image from "../assets/images/contactbluebonnet-min.jpg";

const API_PATH = "http://localhost:3001/api/contact/form.php";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      email: "",
      message: "",
      response: "",
      mailSent: false,
      error: null
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
    this.setState({ response: recaptchaToken });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    (async () => {
      const rawResponse = await axios({
        method: "POST",
        url: `${API_PATH}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        data: this.state
      });
      await (rawResponse => {
        this.setState({
          mailSent: rawResponse.data.mailSent
        });
      })(error => {
        this.setState({
          error: error.message
        });
      });
    })();
  };

  render() {
    return (
      <section id="contact" className="contact rotright">
        <img id="contact_image" src={contact_image} alt="" />
        <div className="features_overlay">
          <div className="container chikobiko">
            <div className="row">
              <div className="main_contact">
                <div
                  className="head_title text-center wow fadeInDown"
                  data-wow-duration="1s"
                >
                  <h2>
                    <i className="fa fa-star" /> Get In Touch{" "}
                    <i className="fa fa-star" />
                  </h2>
                </div>
                <div className="contact_content">
                  <div className="contactInfo">
                    <div className="col-sm-6 col-xs-12">
                      <div
                        className="contact_message wow fadeInLeft"
                        data-wow-duration="1.5s"
                      >
                        <form
                          action={API_PATH}
                          onSubmit={e => this.handleFormSubmit(e)}
                          id="formid"
                        >
                          <div className="form-group">
                            <input
                              type="textbox"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              required=""
                              value={this.state.name}
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              required=""
                              value={this.state.email}
                              onChange={e =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              rows="6"
                              placeholder="Message"
                              value={this.state.message}
                              onChange={e =>
                                this.setState({ message: e.target.value })
                              }
                            />
                          </div>
                          <br />
                          <div className="message_btn text-right">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              action={this.handleFormSubmit}
                              value="Submit"
                            >
                              Submit
                            </button>
                          </div>
                          <ReCaptcha
                            ref={el => {
                              this.captchaDemo = el;
                            }}
                            size="compact"
                            render="explicit"
                            sitekey="6LfI7X8UAAAAAOEvzBpIHhsqFCR6xuKAXeK2XS9Y"
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                          />
                          <div>
                            {this.state.mailSent && (
                              <div>
                                Thank you for contacting us.
                                {this.state.error}{" "}
                              </div>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div
                        className="contact_social_bookmark_area wow fadeInRight"
                        data-wow-duration="1.5s"
                      >
                        <div className="single_contact_phone">
                          <h3>Location:</h3>
                          <span>Cypress, Texas</span>
                        </div>
                        <div className="single_contact_phone">
                          <h3>Phone:</h3>
                          <span>(713) 703-3386</span>
                        </div>
                        <div className="single_contact_phone">
                          <h3>Email:</h3>
                          <a
                            id="emailLink"
                            href="mailto:admin@josephcolca.tech"
                          >
                            <span className="contact_Email">
                              admin@josephcolca.tech
                            </span>
                          </a>
                        </div>
                        <div className="contact_social_bookmark">
                          <ul>
                            <li>
                              <a
                                href="https://github.com/JGColca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="s_f_5"
                              >
                                <i className="fa fa-github" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/in/josephgcolca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="s_f_9"
                              >
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
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

export default Contact;
