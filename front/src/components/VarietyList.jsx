import React, { useEffect, useState } from "react";
import Variety from "../components/Variety";

const VarietyList = props => {
  const [varieties, setVarieties] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        console.log("Got ws data", JSON.parse(msg.data));
        setVarieties(JSON.parse(msg.data));
      };
    };
    fetch("varieties")
      .then(res => res.json())
      .then(data => {
        console.log("Got data", data);
        if (data.err) {
          setErr(JSON.stringify(data.msg));
        } else {
          setVarieties(data);
        }
      });
  }, []);

  const onClickRedirect = () => {
    // Realizar redirección de path
  };

  return (
    <div className="container">
      <h2 className="color4 tittle">OUR FLAVORS</h2>
      <div className="divider"></div>
      <div className="container-fluid">
        <div className="three-items-row">
          {varieties.map(d => (
            <Variety
              key={d.name}
              name={d.name}
              ingredients={d.ingredients}
              description={d.description}
              url={d.url}
            ></Variety>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button type="button" className="orderButton" onClick={onClickRedirect}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default VarietyList;
