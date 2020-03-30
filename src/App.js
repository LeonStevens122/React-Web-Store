// import components and dependencies

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./team.js";
import Contact from "./contact.js";
import "./App.css";
import Header from "./header.js";
import Login from "./login.js";
import Services from "./service.js";
import Landing from "./Landing.js";
import Profile from "./profile";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Component } from "react";
import Shop from './Shop.js';

// create userlist as an empty array
let userList = [];

// function to create user objects
function createUser(email, userName, password) {
    this.email = email;
    this.userName = userName;
    this.password = password;
};



// function to create shop item objects
function createShopItem(imageLink, bulkQty, description, price) {
    this.imageLink = imageLink;
    this.bulkQty = bulkQty; 
    this.description = description;
    this.price = price;
};

// create shopItem objects to populate the shop page
let shopitem1 = new createShopItem('https://cdn.pixabay.com/photo/2017/01/13/17/29/hiring-1977803_960_720.jpg', 1, "Headhunting", 1500);
let shopitem2 = new createShopItem('https://cdn.pixabay.com/photo/2018/02/27/10/07/opportunity-3185099_960_720.jpg', 1, "CV Screening", 1500);
let shopitem3 = new createShopItem('https://cdn.pixabay.com/photo/2016/10/04/13/52/interview-1714370_960_720.jpg', 1, "Interviewing", 1500);
let shopitem4 = new createShopItem('https://cdn.pixabay.com/photo/2017/08/25/20/47/magnifying-2681372_960_720.png', 1, "Qualification verification & Criminal record Check", 1500);
// generate array of shopitems 
let productList = [shopitem1, shopitem2, shopitem3, shopitem4];
// generate array of link items to pupulate the nav Menu
let pageList = [{ to: "/", name: 'Home' }, { to: "/Contact", name: "Contact" }, { to: "/Team", name: "Team" }, { to: "/Services", name: 'Services' }, { to: "/Shop", name: "Shop" }, { to: "/Profile", name: "Profile" }];

class App extends Component {
  // set initial state of the login component
  constructor(props) {
      super(props);

      // bind events
    this.updateUser = this.updateUser.bind(this);
      this.updateLogin = this.updateLogin.bind(this);
      this.addNewUser = this.addNewUser.bind(this);
      this.validateEmail = this.validateEmail.bind(this);
      this.logOut = this.logOut.bind(this);
      
   
    this.state = {
        username: "",
        password: "",
        loggedIn: false,
        newUserName: "",
        newUserPassword: "",
        newUserEmail: ""
    };
  }
    // logout method 
    logOut() {
        this.setState({ loggedIn: false, username: '' })
}
    // method to validate email
    validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    // method to set state and create a new user element
    addNewUser(emailInput, nameInput , passwordInput) {
        this.setState({ newUserEmail: emailInput, newUserName: nameInput, newUserPassword: passwordInput, loggedIn: true, username: nameInput } )

        let createdUser = new createUser(this.state.newUserEmail, this.state.newUserName, this.state.newUserPassword);
        userList.push(createdUser);     
    }
    // method to update username state and change the login state
  updateUser(textInput) {
      
      this.setState({ username: textInput });
    return true;
  }
  // set state to logged in 
  updateLogin() {
    
    this.setState({ loggedIn: true });
  }

    // render component
  render() {
    const loggedIn = this.state.loggedIn;
    const user = this.state.username;
  
    return (
      <div className="App">
        <Router>
              
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            methods are rendered as props to enable state to be raised 
            */}
          <Switch>
                    <Route path="/Contact">
                        <Header logout={this.logOut} pageList={pageList} username={user} />
              <Contact />
            </Route>
            
                    <Route path="/Team">
                        <Header logout={this.logOut} pageList={pageList} username={user} />
                        <Team />                    
            </Route>
                    <Route exact={true} path="/"> 
                        <Header logout={this.logOut} pageList={pageList} username={user} />
                        <Login
                            loggedIn={this.state.loggedIn}
                            updateLogin={this.updateLogin}
                            updateUser={this.updateUser}
                            user={user} />
                    </Route>
 
            <Route path="/Landing">
              <Landing />
            </Route>

                    <Route path="/Services">
                        <Header logout={this.logOut} pageList={pageList} username={user} />
              <Services />
                    </Route>
                    <Route path="/Shop">
                        <Header logout={this.logOut} pageList={pageList} username={user} />
                        <Shop products={productList} />
                    </Route>

                    <Route path="/Profile">
                        <Header logout={this.logOut} pageList={pageList} username={user} />
                        <Profile addUser={this.addNewUser} createUser={this.createUser} validateEmail={this.validateEmail} username={user} />

                </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}
// export App to be renders on the HTML Page
export default App;
