//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default sticky-top">
         <ul>
          <li className="item-left">Test Your Memory</li>
          <li className="item-center"></li>
          <li className="item-right">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;