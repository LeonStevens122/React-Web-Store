// import components and dependancies

import logo from "./HCSALogo.svg";
import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// JavaScript source code

// function to create the header List 
function createHeaderItems(headerList) {
    let headerListItems = [];
    // use map to generate the menu dynamically
    headerListItems = headerList.map((currentListItem, index) => {
        // use conditional statement to change menu so that the link to the current component is no shown
        if (!(String(window.location.href).includes( currentListItem.name ))) {

            console.log("url: ", ( window.location.href ));
            console.log("Index = ", index, "Current Item :", currentListItem);
            return (<li key={index} className="nav-item">
                <Link to={currentListItem.to}>{ currentListItem.name }</Link>               
            </li>)
        }
        return headerListItems;
    });
    return headerListItems;
}


class Header extends Component {
  
    constructor(props)
    {
        super(props);  
    }   
    render() {      
      // show the dynamically rendered Menu and the Header component with the logo
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-light navMain">
          <div className="navimg">
            <img className="navLogo" src={logo} alt="Logo" />
          </div>
                <ul className="navbar-nav">
                    {createHeaderItems(this.props.pageList)}           
          </ul>
          <div className="navbar-brand">HCSA Solutions </div>
                <div className="showUser"> Welcome : {this.props.username}</div>
                <button className="logButton" label="Log out"
                                     
                    onClick={this.props.logout} >Log out
                    
                </button>
        </nav>

        <img className="App-logo img-responsive" src={logo} alt="Logo" />

        <h1 className="headerText">Human Capital South Africa Solutions</h1>
      </div>
    );
  }
}

const style = {
    margin: 15
};
// export the component
export default Header;
