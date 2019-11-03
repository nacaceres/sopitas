import React, { Component } from "react";
import "../App";

import mailLogo from "../img/logos/mail.png";
import instagramLogo from "../img/logos/instagram.png";
import facebookLogo from "../img/logos/facebook.png";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid background-color-2">
        <h3 className="footer-title color1">CONTACT US &#38; FEEDBACK</h3>
        <div className="three-items-row">
          <a href="/" className="fa fa-google card1"></a>
          <a href="/" className="fa fa-instagram card2"></a>
          <a href="/" className="fa fa-facebook card3"></a>
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
