import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import "../App";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   var query = queryString.parse(this.props.location.search);
  //   if (query.token) {
  //     window.localStorage.setItem("jwt", query.token);
  //     this.props.history.push("/");
  //   }
  // }

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
            <a href="/auth/google" class="button">
              <div>
                <span class="svgIcon t-popup-svg">
                  <svg
                    class="svgIcon-use"
                    width="25"
                    height="37"
                    viewBox="0 0 25 25"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                        fill="#34A853"
                      />
                      <path
                        d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                        fill="#EA4335"
                      />
                    </g>
                  </svg>
                </span>
                <span class="button-label">Sign in with Google</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
