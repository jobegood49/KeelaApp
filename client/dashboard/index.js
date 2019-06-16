import React from "react";
import DashboardHeader from "./Header";
import SideBar from "./sideBar";
import DashBoardContainer from "./mainContainer";
import ContainerContext from '../context';

class DashboardMain extends React.Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/login");
      }
    });
  }
  componentWillMount(){
      // additional check if needed // optional 
      const id = Meteor.userId();
      if (id) {
        const data =  Meteor.users.findOne({ _id: id });
        if(data){
          alert('i got the data and username is -- ' + data.username);
          this.context.setUserProfileData(data);
          // if no data means lets logout 
        } else {
          Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/login');
            }
        });
        }
      }
  }
  render() {
    return (
      <div
        id="page-container"
        className="sidebar-l sidebar-o side-scroll header-navbar-fixed"
      >
        <DashboardHeader logout={this.logout.bind(this)}/>
        <SideBar />
        <DashBoardContainer />
      </div>
    );
  }
}
DashboardMain.contextType =  ContainerContext;

export default DashboardMain;
