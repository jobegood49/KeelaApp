import React, { useEffect, useState } from "react";
import ContainerContext from "../../context";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../components/home";
import ManageProfile from '../components/manageProfile';
import Teams from '../components/teams'
import ManageTeams from '../components/manageTeams'


const DashboardMain = props => {
  const PrivateRoute = ({ component: Component, context, close, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          Meteor.userId() !== null ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };
  return (
    <Router>
      <React.Fragment>
        <Route path="/home/manageProfile" exact component={ManageProfile}/>
        <Route path="/home/profile" exact component={Home} />
        <Route path="/home/teams" exact component={Teams} />
        <Route path="/home/manageTeams" exact component={ManageTeams} />
      </React.Fragment>
    </Router>
  );
};
export default DashboardMain;
