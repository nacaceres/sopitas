import React, { Component } from "react";
import "../App";

import logo from "../img/logos/logo1.png";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="banner-row">
          <h5 className="brand-name">
            &lt;&lt;&lt; FREE DELIVERY IN GREATER MONTREAL EVERY SUNDAY
            &gt;&gt;&gt;
          </h5>
        </div>
        <div className="banner-row-alert">
          <h6 className="brand-name">
            &lt;&lt;&lt; THIS PAGE IS UNDER CONSTRUCTION, SOME COMPONENTS CAN FAIL
            &gt;&gt;&gt;
          </h6>
        </div>
        <div className="logo-row">
          <a href="/">
            <img className="logo" src={logo} alt="Sopitas Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
