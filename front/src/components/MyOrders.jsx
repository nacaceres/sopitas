import React, { useEffect, useState } from "react";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        console.log("Got ws data", JSON.parse(msg.data));
        setOrders(JSON.parse(msg.data));
      };
    };
    fetch("orders")
      .then(res => res.json())
      .then(data => {
        console.log("Got data", data);
        if (data.err) {
          setErr(JSON.stringify(data.msg));
        } else {
          setOrders(data);
        }
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Frecuency</th>
          <th>Flavors</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((d, i) => {
          return (
            <tr key={d._id}>
              <td>{d.plan + " Sopitas"}</td>
              <td>{d.frecuency}</td>
              <td>
                {d.flavors[0]["name"] + " " + d.flavors[0]["value"]}
                <br></br>
                {d.flavors[1]["name"] + " " + d.flavors[1]["value"]}
                <br></br>
                {d.flavors[2]["name"] + " " + d.flavors[2]["value"]}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default MyOrders;
