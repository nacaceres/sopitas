import React from 'react';

const BuyForm = (props) => {
  return (
    <div>
  <h2>CHOOSE YOUR PLAN</h2>
  <div className="grilla">

  </div>

  <h2>CHOOSE YOUR FRECUENCY</h2>

  <div className="stepTwo">
    <h2>DELIVER EVERY</h2>
    <select class="custom-select">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <h2>WEEKS</h2>
  </div>

  <h2>CHOOSE FLAVORS</h2>
  <div className="grilla">
  {props.flavors.map((p,i)=>(<Flavor  key={i} image={p.imageurl} ></Flavor>))}
  </div>
  </div>
  )
}

export default BuyForm;

