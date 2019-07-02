import React, { useEffect, useState } from "react";
import ContainerContext from "../../context";
import { Meteor } from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import { Teams } from '../../../imports/api/Teams';



const Home = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const TeamsDataTable = props.filteredTeams.map((item, index) => {
    return (
      <tr key={index}>
        <td className="text-center">
          <img
            className="img-avatar img-avatar48"
            src="assets/img/avatars/avatar1.jpg"
            alt=""
          />
        </td>
        <td className="font-w600">{item.name}</td>
        <td>{item.description}</td>
        <td>
          <span className="label label-success">Not Joined</span>
        </td>
        <td className="text-center">
          <div className="btn-group">
            <button
              className="btn btn-xs btn-default"
              type="button"
              data-toggle="tooltip"
              title=""
              data-original-title="Edit Client"
            >
              <i className="fa fa-pencil" />
            </button>
            <button
              className="btn btn-xs btn-default"
              type="button"
              data-toggle="tooltip"
              title=""
              data-original-title="Remove Client"
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <ContainerContext.Consumer>
      {context => {
        console.log(context, "this is the context")

        if (context.state.user && context.state.user.emails) {
          setUsername(context.state.user.username);
          setEmail(context.state.user.emails[0].address);
          if (context.state.user.profile) {
            setData(context.state.user.profile);
          }
        }
        return (
          <div id="main-container">
            <div className="content bg-image">
              <div className="push-50-t push-15 clearfix">
                <div className="push-15-r pull-left animated fadeIn">
                  <img
                    className="img-avatar img-avatar-thumb"
                    src="assets/img/avatars/avatar1.jpg"
                    alt=""
                  />
                </div>
                <h1 className="h2 text-white push-5-t animated zoomIn">
                  {username ? username : ""}
                </h1>
                <h2 className="h5 text-white-op animated zoomIn">
                  {email ? email : ""}
                </h2>
              </div>
            </div>
            <div className="content content-boxed">
              <div className="row">
                <div className="col-sm-7 col-lg-8">
                  <div className="block">
                    <div className="block-header bg-gray-lighter">
                      <ul className="block-options">
                        <li>
                          <button
                            type="button"
                            data-toggle="block-option"
                            data-action="fullscreen_toggle"
                          >
                            <i className="si si-size-fullscreen" />
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            data-toggle="block-option"
                            data-action="refresh_toggle"
                            data-action-mode="demo"
                          >
                            <i className="si si-edit" />
                          </button>
                        </li>
                      </ul>
                      <h3 className="block-title">
                        <i className="fa fa-newspaper-o" />User Profile
                        Infomation{" "}
                      </h3>
                    </div>
                    <div className="block-content">
                      <ul className="list list-activity push">
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">username</div>
                          <div>
                            <a href="javascript:void(0)">{username}</a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">Email</div>
                          <div>
                            <a href="javascript:void(0)">{email}</a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">First Name</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.fname ? data.fname : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">Last Name</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.lname ? data.lname : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">Address</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.address ? data.address : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">City</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.city ? data.city : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">State</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.state ? data.state : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">Mobile</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.mobno ? data.mobno : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                        <li>
                          <i className="si si-user text-success" />
                          <div className="font-w600">Bio</div>
                          <div>
                            <a href="javascript:void(0)">
                              {data.bio ? data.bio : ""}
                            </a>
                          </div>
                          <div>
                            <small className="text-muted" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 col-lg-4">
                  <div className="block">
                    <div className="block-header bg-gray-lighter">
                      <h3 className="block-title">
                        <i className="fa fa-fw fa-briefcase" /> User Team Info
                      </h3>
                    </div>
                    <div className="block-content">
                      <ul className="list list-simple list-li-clearfix">
                        <li>
                          <a
                            className="item item-rounded pull-left push-10-r bg-info"
                            href="javascript:void(0)"
                          >
                            <i
                              className="si si-si-users
 text-white-op"
                            />
                          </a>
                          <h5 className="push-10-t">Update Profile</h5>
                          <div className="font-s13">update user data</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block-header bg-gray-lighter">
                      <ul className="block-options">
                        <li>
                          <button
                            type="button"
                            data-toggle="block-option"
                            data-action="refresh_toggle"
                            data-action-mode="demo"
                          >
                            <i className="si si-refresh" />
                          </button>
                        </li>
                      </ul>
                      <h3 className="block-title">
                        <i className="fa fa-fw fa-briefcase" /> Actions
                      </h3>
                    </div>
                    <div className="block-content">
                      <ul className="list list-simple list-li-clearfix">
                        <li>
                          <a
                            className="item item-rounded pull-left push-10-r bg-info"
                            href="javascript:void(0)"
                          >
                            <i className="si si-user text-white-op" />
                          </a>
                          <h5 className="push-10-t">Update Profile</h5>
                          <div className="font-s13">update user data</div>
                        </li>
                        <li>
                          <a
                            className="item item-rounded pull-left push-10-r bg-amethyst"
                            href="javascript:void(0)"
                          >
                            <i className="si si-user text-white-op" />
                          </a>
                          <h5 className="push-10-t">View Profile</h5>
                          <div className="font-s13">View Data</div>
                        </li>
                        <li>
                          <a
                            className="item item-rounded pull-left push-10-r bg-danger"
                            href="javascript:void(0)"
                          >
                            <i className="si si-user text-white-op" />
                          </a>
                          <h5 className="push-10-t">Manage Group</h5>
                          <div className="font-s13">add to new Group</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-vcenter">
                  <thead>
                    <tr>
                      <th className="text-center">
                        <i className="si si-users" />
                      </th>
                      <th>Team Name</th>
                      <th>Team Objective</th>
                      <th>Join Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{TeamsDataTable}</tbody>
                </table>
              </div>
          </div>
        );
      }}
    </ContainerContext.Consumer>
  );
};

export default withTracker((props)=> {
  Meteor.subscribe('teams');
  const users= Meteor.users.find({}).fetch()
  const teams= Teams.find({}).fetch()
  const filteredTeams = teams.filter((team) =>{
    return team.members.includes(Meteor.userId())
  })
  return {
    users: users,
    teams: teams,
    filteredTeams: filteredTeams
  }
})(Home);
