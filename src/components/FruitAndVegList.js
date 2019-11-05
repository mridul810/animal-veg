import React, { Component } from "react";
import FruitAndVeg from "./FruitAndVeg";

export default class FruitAndVegList extends Component {
  render() {
    const { fruitAndVegs } = this.props;
    return (
      <>
        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">fruit and Veg list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {fruitAndVegs.map(fruitAndVeg => (
              <FruitAndVeg key={fruitAndVeg.Id} fruitAndVeg={fruitAndVeg} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
