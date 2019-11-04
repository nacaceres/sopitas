import React , { useState, useEffect } from "react";
import minus from '../img/minus.svg';
import plus from '../img/plus.svg';


const Flavor = (props) => {

  let url = props.image;
  const [count, setCount] = useState(0);

  const handleChangeMinus = (evt) =>{
    if(count>0)
    {
      let aux = count;
      setCount(count-1);
      props.callBack(props.name, aux-1, props.aux)
    }

  }
  const handleChangePlus= (evt) =>{
     let aux = count;
      setCount(count+1);
      props.callBack(props.name, aux+1, props.aux)
  }








  return (
  <div className="flavor">
    <img className="image-flavor"src={url} alt="Flavor image" height="250" width="250"></img>

    <div className="quantity">
      <button className="minus-btnn" type="button" name="button" onClick={handleChangeMinus}>
        <img src={minus}alt="-"/>
      </button>
      <input type="text" name={props.name} value={count}/>
      <button className="plus-btnn" type="button" name="button" onClick={handleChangePlus}>
        <img src={plus} alt="+" />
      </button>
    </div>
  </div>
  )
}

export default Flavor;