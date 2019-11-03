import React from 'react';
import Variety from '../components/Variety';

const VarietyList = (props)=>{

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
    </div>
  )
}

export default VarietyList;