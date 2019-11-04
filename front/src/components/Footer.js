import React, { Component } from "react";
import "../App";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid background-color-2">
        <h3 className="footer-title color1">CONTACT US &#38; FEEDBACK</h3>
        <div className="three-items-row">
          <a href="mailto:em@i.l" className="fa fa-google card1">
            <p className="no-visible">Mail to sopitas</p>
          </a>
          <a
            href="https://www.instagram.com/sopitas_canada/"
            className="fa fa-instagram card2"
          >
            <p className="no-visible">Sopitas Instagram</p>
          </a>
          <a
            href="https://www.facebook.com/sopitascanada/"
            className="fa fa-facebook card3"
          >
            <p className="no-visible">Sopitas Facebook</p>
          </a>
        </div>
        <br />
        <a href="/" className="link color1">
          <h6>ABOUT US</h6>
        </a>
        <a href="/" className="link color1">
          <h6>CONDITIONS</h6>
        </a>
      </div>
    );
  }
}

export default Footer;
