import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routing"
// import Login from "./login"
import {Meteor} from 'meteor/meteor'
Meteor.startup(() => {
  ReactDOM.render(<Routing />, document.querySelector("#app"));
});
