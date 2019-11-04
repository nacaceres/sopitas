import React,{useState,useEffect} from 'react';
import Flavor from '../components/Flavor';

const BuyForm = (props) => {

  const [flavors, setFlavors] = useState([]);

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
        }
      });
  }, []);


  const onImageClick1 = ()=>{
   // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 1");
    document.getElementsByName("5")[0].className="w3-light-blue-selected";
    document.getElementsByName("10")[0].className="w3-light-blue";
    document.getElementsByName("15")[0].className="w3-light-blue";
  }
  const onImageClick2 = ()=>{
    // document.getElementsByClassName("stepOne");
     console.log("PROBANDO IMAGEN 2");
     document.getElementsByName("5")[0].className="w3-light-blue";
    document.getElementsByName("10")[0].className="w3-light-blue-selected";
    document.getElementsByName("15")[0].className="w3-light-blue";
   }
   const onImageClick3 = ()=>{
    // document.getElementsByClassName("stepOne");
     console.log("PROBANDO IMAGEN 3");
     document.getElementsByName("5")[0].className="w3-light-blue";
    document.getElementsByName("10")[0].className="w3-light-blue";
    document.getElementsByName("15")[0].className="w3-light-blue-selected";
   }


  return (
    <div>
  <ol><li >
  <h2 className="color4">CHOOSE YOUR PLAN</h2>

  <div className="grilla" >
    <div className="w3-light-blue w3-margin" name="5" onClick={onImageClick1} >
    <div className=" w3-center">
      <h3>5 SOPITAS 25$</h3>
      <img src="https://recetasconquinoa.es/img/sopa-de-quinoa-774.jpg" width="200px" alt="Avatar"/>
      <h4>5$/PORTION</h4>
    </div>
    </div>

    <div className="w3-light-blue w3-margin" name="10" onClick={onImageClick2} >
    <div className=" w3-center">
      <h3>10 SOPITAS 45$</h3>
      <img src="https://recetasconquinoa.es/img/sopa-de-quinoa-774.jpg" width="200px" alt="Avatar"/>
      <h4>4,5$/PORTION</h4>
    </div>
    </div>

    <div className="w3-light-blue w3-margin" name="15" onClick={onImageClick3}>
    <div className=" w3-center">
      <h3>15 SOPITAS 60$</h3>
      <img src="https://recetasconquinoa.es/img/sopa-de-quinoa-774.jpg" width="200px" alt="Avatar"/>
      <h4>4$/PORTION</h4>
    </div>
    </div>
  </div>
  </li>


  <li><h2 className="color4">CHOOSE YOUR FRECUENCY</h2>

  <div className="stepTwo">
    <form className="aa"><h4 className="color1">DELIVER EVERY {" "}
    <select>
      <option default value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select> {" "}
    WEEKS</h4></form>
  </div>
  </li>
  <br></br>
  <li>
  <h2 className="color4">CHOOSE FLAVORS</h2>
  </li><br></br></ol>
  <div className="grilla">
  {flavors.map((p,i)=>(<Flavor name={p.name} key={i} image={p.imageurl}></Flavor>))}
  </div>

  <div className="btn-container">
    <button type="button" className="btn btn-lg color5">ORDER NOW</button>
  </div>
  </div>
  )
}

export default BuyForm;

