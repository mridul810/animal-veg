import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  render() {
    const { animals } = this.props;
    return (
      <>
        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">animals list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {animals.map(animal => (
              <Animal key={animal.Id} animal={animal} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
