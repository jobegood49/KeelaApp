import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = props => {
  return (
    <nav id="sidebar">
      <div className="sidebar-content">
        <div className="side-header side-content bg-white-op">
          <button
            className="btn btn-link text-gray pull-right hidden-md hidden-lg"
            type="button"
            data-toggle="layout"
            data-action="sidebar_close"
          >
            <i className="fa fa-times" />
          </button>
          <div className="btn-group pull-right">
            <button
              className="btn btn-link text-gray dropdown-toggle"
              data-toggle="dropdown"
              type="button"
            >
              <i className="si si-drop" />
            </button>
            <ul className="dropdown-menu dropdown-menu-right font-s13 sidebar-mini-hide">
              <li className="active">
                <Link data-toggle="theme" data-theme="default" to="/">
                  <i className="fa fa-circle text-default pull-right" />{" "}
                  <span className="font-w600">Default</span>
                </Link>
              </li>
            </ul>
          </div>
          <a className="h5 text-white" href="index.html">
            <i className="fa fa-circle-o-notch text-primary" />{" "}
            <span className="h4 font-w600 sidebar-mini-hide">ne</span>
          </a>
        </div>

        <div className="side-content">
          <ul className="nav-main">
            <li>
              <NavLink activeClassName="active" to="/home/profile">
                <i className="si si-home" />
                <span className="sidebar-mini-hide">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/manageProfile">
                <i className="si si-speedometer" />
                <span className="sidebar-mini-hide">Manage Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/teams">
                <i className="si si-user" />
                <span className="sidebar-mini-hide">Teams</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/manageteams">
                <i className="si si-speedometer" />
                <span className="sidebar-mini-hide">Manage Teams</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
