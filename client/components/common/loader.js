import React, { Component } from "react";

export class AppLoader extends Component {
  render() {
    if (!this.props.loaded) {
      return (
        <div className="loader-dots ">
          <div className="ball ball1" />
          <div className="ball ball2" />
          <div className="ball ball3" />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default AppLoader;
