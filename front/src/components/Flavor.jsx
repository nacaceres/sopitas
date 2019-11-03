import React from 'react';

const Flavor = (props) => {

  let url = props.imageurl;
  return (
  <div>
    <img src={url} alt="Flavor image" height="150" width="150"></img>
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <img src="../img/plus.svg" alt="" />
      </button>
      <input type="text" name="name" value="0"/>
      <button class="minus-btn" type="button" name="button">
        <img src="../img/minus.svg" alt="" />
      </button>
    </div>
  </div>
  )
}

export default Flavor;