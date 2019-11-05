import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import FruitAndVeg from "./pages/FruitAndVeg";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/animals" exact component={Animals} />
            <Route path="/fruit-and-veg" exact component={FruitAndVeg} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;