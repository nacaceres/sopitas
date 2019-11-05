import React from "react";


const Variety = (props) => {

  //let url = props.imageurl;
  let name = props.name;
  let description = props.description;
  let ingredients = props.ingredients;
  let url2 = props.url;

  return (
  <div className="flavor">
    <h3 className="color1">{name}</h3>
    <img className="image-flavor" src={url2} alt="Flavor" height="350" width="350"></img>
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