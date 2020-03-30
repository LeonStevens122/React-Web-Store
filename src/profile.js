
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import { Component } from "react";
import Landing from "./Landing.js";

let newUserName = "";
let newUserPassword = "";
let newUserEmail= "";

let confirmUserPassword = "";
let confirmUserEmail = "";


// create Login Page
class Profile extends Component {
    // set initial state of the login component
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleEmailConfirm = this.handleEmailConfirm.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        console.log("props = :", this.props);
    }

    // method to handle click event
    // a prop method validates the email address
    // function checks if the email and password match thier cofirmation elements
    // generates alert messages if any if the input is not valid. 
    // if all of the inputs are valid and match the method calls a prop method, which updates the username fields and logs the user in
    // user input is then saved to App State
    handleClick(event) { 
        let emailValid = this.props.validateEmail(newUserEmail);

        if ((emailValid) && (newUserEmail === confirmUserEmail) && (newUserPassword === confirmUserPassword)) {
            this.props.addUser(newUserEmail, newUserName, newUserPassword)
        } else if (newUserEmail != confirmUserEmail) {
            alert("The email addresses do not match.");
        } else if (newUserPassword != confirmUserPassword) {
            alert("The passwords do not match.");
        } else if (!emailValid) {
            alert("Please enter a valid email address.")

        };
    }

    // method  saves  the user input to a variable 
    handleUser(event) {     
        newUserName = event.target.value;
    }
     // method  saves  the user input to a variable 
    handleEmailConfirm(event) {      
        confirmUserEmail = event.target.value;
    }

     // method  saves  the user input to a variable 
    handleEmail(event) {
        newUserEmail = event.target.value;
    }
     // method  saves  the user input to a variable 
    handlePasswordConfirm(event) {
        confirmUserPassword = event.target.value;
    }
     // method  saves  the user input to a variable 
    handlePassword(event) {
        newUserPassword = event.target.value;
    }

    render() {
        // render the form for user input
        // with methods to handle user input       
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={this.handleUser}
                        />
                        <br />
                        <TextField
                            type="email"
                            hintText="Enter your Email Address"
                            floatingLabelText="Email"
                            onChange={this.handleEmail}
                            
                        />
                        <br />
                        <TextField
                            type="email"
                            hintText="Confirm your Email Address"
                            floatingLabelText="Confirm Email"
                            onChange={this.handleEmailConfirm}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={this.handlePassword}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Confirm your Password"
                            floatingLabelText="Confirm Password"
                            onChange={this.handlePasswordConfirm}
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
// export component to be used by App
export default Profile;
