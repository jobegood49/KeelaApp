
import React,{useEffect, useState} from 'react';
import ContainerContext from '../../context';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../components/home';

const DashboardMain = (props) => {
  
  const PrivateRoute = ({ component: Component, context, close, ...rest }) => {
    return <Route {...rest}  render= { (props) => (
      Meteor.userId() !== null
        ? <Component {...props}/>
        : <Redirect to='/login' />
    )} />
  }
  return (
    <Router>
      <React.Fragment>
        <Route path="/home/profile" exact component={Home} />
      </React.Fragment>
    </Router>
  )
}
export default DashboardMain;