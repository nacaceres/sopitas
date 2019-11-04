import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid sticky-top">
        <div className="navbar-row">
          <nav className="navbar">
            <Link to={"/"} className="navbar-brand">
              Sopitas
            </Link>
            <Link to={"/order"} className="nav-link">
              ORDER
            </Link>
            <Link to={"/varieties"} className="nav-link">
              VARIETIES
            </Link>
            <Link to={"/ourHistory"} className="nav-link">
              OUR HISTORY
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
