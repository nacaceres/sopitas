import React , { useState, useEffect } from "react";


const Variety = (props) => {

  //let url = props.imageurl;
  let name = props.name;
  let description = props.description;
  let ingredients = props.ingredients;

  return (
  <div className="flavor">
    <h3 className="color1">{name}</h3>
    <img className="image-flavor"src="https://recetasconquinoa.es/img/sopa-de-quinoa-774.jpg" alt="Flavor image" height="350" width="350"></img>
    <h4 className="color1">DESCRIPTION</h4>
    {description}
    <h4 className="color1">INGREDIENTS</h4>
    <ul>
    {ingredients.map(i => <li key={i}>{i}</li>)}
    </ul>
  </div>
  )
}

export default Variety;