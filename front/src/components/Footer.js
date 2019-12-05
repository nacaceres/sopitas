import React, { Component } from "react";

import "../App";

import mail from "../img/social-media/mail.png";
import instagram from "../img/social-media/instagram.png";
import facebook from "../img/social-media/facebook.png";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid background-color-2 footer">
        <h3 className="footer-title color1">CONTACT US &#38; FEEDBACK</h3>
        <div className="three-items-row">
          <a href="mailto:sopitascanada@gmail.com" className="card1">
            <img className="social-media-icon" src={mail} alt="Mail sopitas" />
          </a>
          <a href="https://www.instagram.com/sopitas_canada/" className="card2">
            <img
              className="social-media-icon"
              src={instagram}
              alt="Instagram sopitas"
            />
          </a>
          <a href="https://www.facebook.com/sopitascanada/" className="card3">
            <img
              className="social-media-icon"
              src={facebook}
              alt="Facebook sopitas"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
