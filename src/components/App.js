import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main_area">
            <Route exact path="/" component={Home} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
