import React, { Component } from "react";
import "../App";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid sticky-top">
        <div className="navbar-row">
          <nav className="navbar">
            <a href="/" className="navbar-brand">
              Sopitas
            </a>
            <a href="/" className="nav-link">
              ORDER
            </a>
            <a href="/" className="nav-link">
              VARIETIES
            </a>
            <a href="/" className="nav-link">
              OUR HISTORY
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
