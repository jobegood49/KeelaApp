import React from "react";
import ContainerContext from "./context";
import { withRouter } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
// import { Meteor } from 'meteor/meteor';

class RenderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: { profile: null }
    };
  }
  setUserProfileData(data) {
    this.setState({ user: data });
  }
  handleLogin(data) {
    this.setState({ loading: true });
    Meteor.loginWithPassword(data.email, data.password, err => {
      if (err) {
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
        this.props.history.push("/home/profile");
      }
    });
  }

  handleRegister(data) {
    this.setState({ loading: true });
    Accounts.createUser(
      {
        email: data.email,
        password: data.password,
        username: data.username,
        profile: {
          address: "",
          username: data.username,
          fname: "",
          lname: "",
          mobno: "",
          bio: "",
          city: "",
          country: "",
          state: ""
        }
      },
      err => {
        if (!err) {
          this.setState({ loading: false });
          this.props.history.push("/login");
        } else {
          this.setState({ loading: false });
        }
      }
    );
  }

  render() {
    return (
      <ContainerContext.Provider
        value={{
          state: this.state,
          setUserProfileData: this.setUserProfileData.bind(this),
          handleLogin: this.handleLogin.bind(this),
          handleRegister: this.handleRegister.bind(this)
        }}
      >
        {this.props.children}
      </ContainerContext.Provider>
    );
  }
}

export default withRouter(RenderContainer);
