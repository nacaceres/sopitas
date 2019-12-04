import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./style/home.css";
import "./style/footer.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Information from "./components/Information";
import OurHistory from "./components/OurHistory";
import Footer from "./components/Footer";
import BuyForm from "./components/BuyForm";
import VarietyList from "./components/VarietyList";

function App() {
  const [user, setUser] = useState(null);
  const [docs, setDocs] = useState([]);
  const [err, setErr] = useState("");

  const backURL = process.env.BACK_URL || "http://localhost:3001";

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        setDocs(JSON.parse(msg.data));
      };
    };

    fetch("/auth/getUser")
      .then(res => res.json())
      .then(_user => {
        if (_user) {
          setUser(_user);
        }
      });

    fetch("data")
      .then(res => res.json())
      .then(data => {
        if (data.err) {
          setErr(JSON.stringify(data.msg));
        } else {
          setDocs(data);
        }
      });
  }, []);

  const renderDocs = () => docs.map(d => <div key={d.name}>{d.name}</div>);
  return (
    <Router>
      <div className="App container-fluid">
        <Header />
        <Navbar user={user} />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <Jumbotron />
              <Information />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/order"
          render={props => (
            <React.Fragment>
              <BuyForm />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/varieties"
          render={props => (
            <React.Fragment>
              <VarietyList />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/ourHistory"
          render={props => (
            <React.Fragment>
              <OurHistory />
            </React.Fragment>
          )}
        />
        <div>{err}</div>
        {renderDocs()}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
