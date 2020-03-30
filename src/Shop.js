import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Team from "./team.js";
//import Contact from "./contact.js";
import "./App.css";

import Image from "react-bootstrap/Image";
//import Header from "./header.js";
//import Login from "./login.js";
//import Services from "./service.js";
//import Landing from "./login.js";
//import logo from "./HCSALogo.svg";
//import NewNavBar from "./nvbar.js";
//import Nav from "react-bootstrap/Navbar";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Component } from "react";
//import { Redirect } from "react-router-dom";


// function loads the products to be displayed on the shop page 
// products prop is imported from the app.js component and the content is generated dynamically using Map to 
// generate a list of components. 
function loadProducts(products) {
    let productElements = products.map((currentProduct, index) => {

        const currentProductElement = (<li className="prodListCSS" key={index}>
            <a> <Image className="productImageCSS" src={currentProduct.imageLink} thumbnail/> </a>
            <h3> {currentProduct.description}</h3>
            <h3> R {currentProduct.price} </h3>
            
            </li>);
        return currentProductElement;




    });
    console.log(productElements);
    return productElements;
};


// default App exported - products generated from props
export default class Shop extends React.Component {
  render() {
    return (
      <div>
            <p> Shop </p>
            <ul>
                {loadProducts(this.props.products)}

                </ul>
      </div>
    );
  }
}
