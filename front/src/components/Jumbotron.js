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
          <button type="submit" className="orderButton">
            ORDER NOW
          </button>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
