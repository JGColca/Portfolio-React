import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { loadReCaptcha } from "react-recaptcha-google";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="main_area">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/features" component={Features} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/testimonial" component={Testimonial} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/contact" component={Contact} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
