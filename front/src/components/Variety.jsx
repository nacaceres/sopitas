import React from "react";

const Variety = props => {
  //let url = props.imageurl;
  let name = props.name;
  let description = props.description;
  let ingredients = props.ingredients;
  let url2 = props.url;

  return (
    <div className="flavor">
      <h4 className="color1">{name}</h4>
      <img
        className="image-flavor"
        src={url2}
        alt="Flavor"
        height="350"
        width="350"
      ></img>
      <p className="p-text-2">{description}</p>
      <ul>
        {ingredients.slice(0, 3).map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Variety;
