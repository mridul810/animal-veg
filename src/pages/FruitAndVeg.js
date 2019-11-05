import React, { Component } from "react";
import FruitAndVegList from "../components/FruitAndVegList";

import { fruitAndVegData } from "../data/tempFruitAndVegList.js";
export default class fruitAndVegs extends Component {
  constructor(props) {
    super(props);
    this.getFruitAndVegs = this.getFruitAndVegs.bind(this);
  }
  state = {
    fruitAndVegs: fruitAndVegData,
    url: `http://styleguide.effectivedigital.com/interview/api/fruitveg`,
    base_url: `http://styleguide.effectivedigital.com/interview/api/fruitveg`,
    query: "&q=",
    error: ""
  };

  async getFruitAndVegs() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = {
        'fruitAndVegs' : await data.json(),
      };
      this.setState({
          fruitAndVegs: jsonData.fruitAndVegs,
          error: ""
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getFruitAndVegs();
  }

  render() {
    return (
      <>
        {
          <FruitAndVegList fruitAndVegs={this.state.fruitAndVegs} />
        }
      </>
    );
  }
}
