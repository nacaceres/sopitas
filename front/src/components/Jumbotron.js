import React, { Component } from "react";
import "../App";

class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid jumbotron">
        <div className="jumbotronText">
          <h3>Nutritious food for your busy lifestyle</h3>
        </div>
        <div className="jumbotronButton">
          <a className="orderButton" href="/order">
            ORDER NOW
          </a>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
