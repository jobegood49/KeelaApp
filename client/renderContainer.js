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

  createNewTeam(data) {
    Meteor.call("teams.insert", data);
  }

  joinTeam(data, id = null) {
    // sending ID from manage Team page
    const payload = {
      teamId: data._id,
      members: data.members || [],
      userId: id || Meteor.userId()
    };
    Meteor.call("teams.joinTeam", payload, err => {
      if (err) {
        console.log("unable to join team");
      } else {
        console.log("Joined successfully");
        if (id) {
          this.props.history.push("/home/teams");
        }
      }
    });
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
          handleRegister: this.handleRegister.bind(this),
          createNewTeam: this.createNewTeam.bind(this),
          joinTeam : this.joinTeam.bind(this)
        }}
      >
        {this.props.children}
      </ContainerContext.Provider>
    );
  }
}

export default withRouter(RenderContainer);
