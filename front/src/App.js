import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Information from "./components/Information";
import Footer from "./components/Footer";
import BuyForm from "./components/BuyForm";

function App() {
  const [docs, setDocs] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        console.log("Got ws data", JSON.parse(msg.data));
        setDocs(JSON.parse(msg.data));
      };
    };

    fetch("data")
      .then(res => res.json())
      .then(data => {
        console.log("Got data", data);
        if (data.err) {
          setErr(JSON.stringify(data.msg));
        } else {
          setDocs(data);
        }
      });
  }, []);

  const renderDocs = () => docs.map(d => <div key={d.name}>{d.name}</div>);
  return (
    <div>
      <div className="App container-fluid">
        <Header />
        <Navbar />
        <Jumbotron />
        <div className="divider"></div>
        <Information />
        <h1>Reactive!!!</h1>
        {/*}<BuyForm flavors={[{urlimg:""},{urlimg:""},{urlimg:""},{urlimg:""},{urlimg:""},{urlimg:""}]}></BuyForm>*/}

        <div>{err}</div>
        {renderDocs()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
