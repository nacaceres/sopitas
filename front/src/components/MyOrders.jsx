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
    <div className="container">
      <h2 className="color4 tittle">MY ORDERS</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="p-text">Plan</th>
            <th className="p-text">Frequency</th>
            <th className="p-text">Flavours</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((d, i) => {
            return (
              <tr key={d._id}>
                <td>{d.plan + " Sopitas"}</td>
                <td>{d.frecuency + " weeks"}</td>
                <td>
                  {d.flavors.map((f, j) => {
                    return (
                      <p>
                        {f.name} ({f.value})
                      </p>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MyOrders;
