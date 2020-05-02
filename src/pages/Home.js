import React, { Component } from "react";

import { Header } from "../components";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="helloBlock"> Home </div>
      </div>
    );
  }
}

export default Home;
