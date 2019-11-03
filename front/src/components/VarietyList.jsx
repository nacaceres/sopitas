import React from 'react';
import Variety from '../components/Variety';

const VarietyList = (props)=>{


  const onClickRedirect =()=>{
    // Realizar redirección de path
  }

  return(
    <div>
      <h2 className="color1">OUR FLAVORS</h2>
    <div className="container-fluid">
          <div className="three-items-row">
            <Variety name="NAME 1" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
            <Variety name="NAME 2" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
            <Variety name="NAME 3" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
          </div>
          <div className="three-items-row">
            <Variety name="NAME 4" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
            <Variety name="NAME 5" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
            <Variety name="NAME 6" description="This is the description of the flavor" ingredients={["One", "Two"]}></Variety>
          </div>
    </div>
    <div className="btn-container">
    <button type="button" class="btn btn-lg color5" onClick={onClickRedirect}>ORDER NOW</button>
  </div>
    </div>
  )
}

export default VarietyList;