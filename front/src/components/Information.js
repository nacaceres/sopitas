import React, { Component } from "react";

import "../App";

import snack from "../img/photos/snack.png";
import workout from "../img/photos/workout.png";
import meal from "../img/photos/meal.png";
import flavours from "../img/photos/flavours.png";
import delivery from "../img/photos/delivery.png";
import cook from "../img/photos/cook.png";

class Information extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="color4">WHEN EAT SOPITAS?</h2>
        <div className="divider"></div>
        <div className="three-items-row">
          <div className="card card1">
            <img src={snack} alt="Snack icon" className="card-img-top icon" />
            <div className="card-body">
              <h5>As a snack</h5>
            </div>
          </div>
          <div className="card card2">
            <img
              src={workout}
              alt="Workout icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <h5>Before or after workout</h5>
            </div>
          </div>
          <div className="card card3">
            <img src={meal} alt="Meal icon" className="card-img-top icon" />
            <div className="card-body">
              <h5>Starter or part of your main course meal</h5>
            </div>
          </div>
        </div>

        <h2 className="color4">HOW IT WORKS?</h2>
        <div className="divider"></div>
        <div className="three-items-row">
          <div className="card card1">
            <img
              src={flavours}
              alt="Flavours icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <h5>
                Choose your plan, order your favorite flavours and delivery
                frequency
              </h5>
            </div>
          </div>
          <div className="card card2">
            <img
              src={delivery}
              alt="Delivery icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <h5>We deliver weekly to your door. Freeze at your reception</h5>
            </div>
          </div>
          <div className="card card3">
            <img src={cook} alt="Cook icon" className="card-img-top icon" />
            <div className="card-body">
              <h5>
                Warm 4 - 5 microwave or 15 mins storve and enjoy at any time of
                your day
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
