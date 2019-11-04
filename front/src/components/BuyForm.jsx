import React, { useState, useEffect } from "react";
import Flavor from "../components/Flavor";

import plan1 from "../img/sopitas/sopitas1.jpg";
import plan2 from "../img/sopitas/sopitas3.jpg";
import plan3 from "../img/sopitas/sopitas5.jpg";

const BuyForm = props => {
  const [flavors, setFlavors] = useState([]);
  const [plan, setPlan] = useState("5");
  const [flavorsSelected, setFlavorsSelected] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        //console.log("Got ws data", JSON.parse(msg.data));
        setFlavors(JSON.parse(msg.data));
      };
    };

    fetch("varieties")
      .then(res => res.json())
      .then(data => {
        //console.log("Got data", data);
        if (data.err) {
          // setErr(JSON.stringify(data.msg));
        } else {
          setFlavors(data);
          let arr = [];
          for(let i=0; i<Object.keys(data).length;i++)
          {
              arr.push({name:data[i].name, value:0})
          }
          setFlavorsSelected(arr);
        }
      });
  }, []);

  const onImageClick1 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 1");
    document.getElementsByName("5")[0].className =
      "w3-light-blue-selected w3-margin";
    document.getElementsByName("10")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("15")[0].className = "w3-light-blue w3-margin";
    console.log("frecuencia", document.getElementsByName("frecuency")[0].value);
    setPlan("5");
  };
  const onImageClick2 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 2");
    document.getElementsByName("5")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("10")[0].className =
      "w3-light-blue-selected w3-margin";
    document.getElementsByName("15")[0].className = "w3-light-blue w3-margin";

    setPlan("10");
  };
  const onImageClick3 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 3");
    document.getElementsByName("5")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("10")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("15")[0].className =
      "w3-light-blue-selected w3-margin";

    setPlan("15");
  };

  function callBackFunction(name, value, key) {
    console.log("prueba call back:", name, value, key);
    let str = name+":"+"'"+value+"'";
    let act = flavorsSelected;
    act[key]={name:name+"", value:value}
    setFlavorsSelected(act);
    console.log(flavorsSelected);
  };

  const orderNow = () =>{

    var frecuency = document.getElementsByName("frecuency")[0].value;
    var data = {plan: plan,frecuency:frecuency, flavors:flavorsSelected};
    console.log("data ordernowm", data);

    fetch("/order", {

      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  return (
    <div className="container" style={{ marginTop: 10 }}>
      <ol>
        <li>
          <h2 className="color4">CHOOSE YOUR PLAN</h2>
          <div className="grilla">
            <div
              className="w3-light-blue-selected w3-margin"
              name="5"
              onClick={onImageClick1}
            >
              <div className=" w3-center">
                <h3>5 SOPITAS 25$</h3>
                <img src={plan1} width="200px" alt="Avatar" />
                <h4>5$/PORTION</h4>
              </div>
            </div>

            <div
              className="w3-light-blue w3-margin"
              name="10"
              onClick={onImageClick2}
            >
              <div className=" w3-center">
                <h3>10 SOPITAS 45$</h3>
                <img src={plan2} width="200px" alt="Avatar" />
                <h4>4,5$/PORTION</h4>
              </div>
            </div>

            <div
              className="w3-light-blue w3-margin"
              name="15"
              onClick={onImageClick3}
            >
              <div className=" w3-center">
                <h3>15 SOPITAS 60$</h3>
                <img src={plan3} width="200px" alt="Avatar" />
                <h4>4$/PORTION</h4>
              </div>
            </div>
          </div>
        </li>

        <li>
          <h2 className="color4">CHOOSE YOUR FRECUENCY</h2>

          <div className="stepTwo">
            <form className="aa">
              <h5 className="color1">
                DELIVER EVERY{" "}
                <select name="frecuency">
                  <option default value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>{" "}
                WEEKS
              </h5>
            </form>
          </div>
        </li>
        <br></br>
        <li>
          <h2 className="color4">CHOOSE FLAVORS</h2>
        </li>
        <br></br>
      </ol>
      <div className="grilla">
        {flavors.map((p, i) => (
          <Flavor name={p.name} key={i} aux={i} image={p.imageurl} callBack={callBackFunction}></Flavor>
        ))}
      </div>

      <div className="btn-container">
        <button type="button" className="orderButton" onClick={orderNow}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default BuyForm;
