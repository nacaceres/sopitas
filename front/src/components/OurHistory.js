import React, { Component } from "react";

import "../App";

import banner from "../img/banner/banner2.jpg";

class OurHistory extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="color4">SOPITAS HISTORY</h2>
        <div className="divider"></div>
        <div className="two-row">
          <img
            src={banner}
            alt="Sopitas history image"
            className="history-img"
          />
          <p className="history-description">
            Sopitas is a family business located in Montreal, Canada. It was
            born in 2019, focusing on the busy lifestyle of our customers. We
            want to promote a healthy and active nutrition. That's why our
            Sopitas are made only from fresh and natural ingredients. Choose the
            best plan that meets your needs and we will deliver frozen soups
            directly to your door. No long-term commitment.
          </p>
        </div>
      </div>
    );
  }
}

export default OurHistory;
