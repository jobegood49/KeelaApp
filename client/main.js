import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routing"
// import Login from "./login"
import {Meteor} from 'meteor/meteor'
import './assets/css/toastify.css';
import { toast } from 'react-toastify';
import './assets/css/styles.css'


toast.configure({
  autoClose: 8000,
  draggable: false,
  //etc you get the idea
});

Meteor.startup(() => {
  ReactDOM.render(<Routing />, document.querySelector("#app"));
});
