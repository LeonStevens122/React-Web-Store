// JavaScript source code
// import dependancies and libraries
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import { Component } from "react";
import Landing from "./Landing.js";

// create Login Page
class Login extends Component {
  // set initial state of the login component
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      console.log("props = :", this.props);
    
  }

  // method to handle click event
  handleClick(event) {
    this.props.updateLogin();
    }
// method to handle user input
    handleChange(event)
    {
        let update = this.props;
        update.updateUser(event.target.value);
    }
    
  render() {
   // checks to see if the user is logged in and renders either the login page or the landing page
      console.log("update user", this.props.updateUserName);
    if (this.props.loggedIn) {
      console.log(" return Landing in Log");
      return <Landing user={this.props.user} />;
      }
      // render a log in form with 
      // event handling 
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
                        onChange={ this.handleChange}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
                        onClick={this.handleClick}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
// export login component
export default Login;
