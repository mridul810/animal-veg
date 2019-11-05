import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
      <Link to="/" className="navbar-brand">
        Animals & Fruits
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/fruit-and-veg">
              Fruits and Veg
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
