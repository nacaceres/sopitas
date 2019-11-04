import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      token: "",
      id: "",
      name: "",
      url: "",
      email: ""
    };
  }

  googleSDK() {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "917120081957-a0798ml3atas8sr08h70s75aqifb6jqj.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scope: "profile email"
        });
        this.prepareLoginButton();
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  }

  componentDidMount() {
    this.googleSDK();
  }

  prepareLoginButton = () => {
    this.auth2.attachClickHandler(
      this.refs.googleLoginBtn,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        this.setState({
          isSignedIn: true,
          token: googleUser.getAuthResponse().id_token,
          id: profile.getId(),
          name: profile.getName(),
          url: profile.getImageUrl(),
          email: profile.getEmail()
        });
        console.log(this.state.isSignedIn);
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      isSignedIn: false,
      token: "",
      id: "",
      name: "",
      url: "",
      email: ""
    });
  };

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
            {!this.state.isSignedIn ? (
              <button className="sessionBotton" ref="googleLoginBtn">
                LOGIN
              </button>
            ) : (
              <button className="sessionBotton" onClick={this.handleClick}>
                LOGOUT
              </button>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
