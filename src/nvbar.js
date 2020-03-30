// JavaScript source code

import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "react-bootstrap/Navbar";
//import NavLink from "react-bootstrap/NavLink";
//import Nav from "react-bootstrap/Navbar";

import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
// create classes
class NewNavBar extends Component {
  // use Constructor method to set the state of the element - initialising the initial state of Time: being a date datatype - converted to string for display
  constructor(props) {
    super(props);
    this.state = {
      // new Date() gets the current time from the system
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>

             
        </Navbar>
      </div>
    );
  }
}

console.log("NAvBAr Component", NewNavBar);

