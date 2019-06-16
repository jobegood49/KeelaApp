import React from "react";
import { HashRouter as Router, Redirect } from "react-router-dom";
import { Route } from "react-router";
import Login from "./login";
import Register from "./register";
import Home from "./dashboard/index";
import RenderContainer from "./renderContainer";
import ContainerContext from "./context";

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
const NoAuthRoute = ({ component: Component, close, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        Meteor.userId() !== null ? (
          <Redirect to="/home/profile" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const Routing = () => {
  return (
    <ContainerContext.Consumer>
      {context => (
        <Router hashType="slash">
          <RenderContainer>
            <NoAuthRoute path="/" exact component={Login} />
            <NoAuthRoute exact path="/register" component={Register} />
            <NoAuthRoute exact path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} context={context} />
          </RenderContainer>
        </Router>
      )}
    </ContainerContext.Consumer>
  );
};

export default Routing;
