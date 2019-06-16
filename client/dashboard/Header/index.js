import React from "react";
import "./header.css";

const Header = props => {
  return (
    <header id="header-navbar" className="content-mini content-mini-full">
      <ul className="nav-header pull-right">
        <li>
          <div className="btn-group">
            <button
              onClick={props.logout}
              className="btn btn-default btn-image dropdown-toggle"
              data-toggle="dropdown"
              type="button"
            >
              Logout <i className="si si-user" />
            </button>
          </div>
        </li>
        <li>
          <div className="btn-group">
            <button
              className="btn btn-default btn-image dropdown-toggle"
              data-toggle="dropdown"
              type="button"
            >
              Profile <i className="si si-user" />
            </button>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
