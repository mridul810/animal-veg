import React, { Component } from "react";
import AnimalList from "../components/AnimalList";

import { animalData } from "../data/tempAnimalList";
export default class Animals extends Component {
  constructor(props) {
    super(props);
    this.getAnimals = this.getAnimals.bind(this);
  }
  state = {
    animals: animalData,
    search: "",
    url: `http://styleguide.effectivedigital.com/interview/api/animals`,
    base_url: `http://styleguide.effectivedigital.com/interview/api/animals`,
    query: "&q=",
    error: ""
  };

  async getAnimals() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = {
        'animals' : await data.json(),
      };
    
        this.setState({
          animals: jsonData.animals,
          error: ""
        });
      
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAnimals();
  }

  render() {
    return (
      <>
        
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <AnimalList animals={this.state.animals} />
        )}
      </>
    );
  }
}
