import React, { useContext, useState } from "react";
import Select from "react-select";
import ContextContainer from "../../context";
import { Teams } from "../../../imports/api/Teams";
import { withTracker } from "meteor/react-meteor-data";

const ManageTeams = props => {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedTeam, setSelectedTeam] = useState({});
  const Context = useContext(ContextContainer);

  const handelSubmit = e => {
    e.preventDefault();
    if (selectedUser.value && selectedTeam.value) {
    //   console.log(selectedTeam, selectedUser);
      Context.joinTeam(selectedTeam.value, selectedUser.value);
    } else {
    }
  };
  const userOption = props.users.map(i => {
    return { value: i._id, label: i.username };
  });
  const teamOption = props.teams.map(i => {
    return { value: i, label: i.name };
  });

  const handleTeamChange = selectedOption => {
    console.log(selectedOption);
    setSelectedTeam(selectedOption);
  };
  const handleUserChange = selectedOption => {
    console.log(selectedOption);
    setSelectedUser(selectedOption);
  };

  return (
    <div id="main-container">
      <div className="content">
        <h2 className="content-heading">Manage Teams</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="block block-themed">
              <div className="block-header bg-info">
                <h3 className="block-title">Search User and Add Teams</h3>
              </div>
              <div className="block-content">
                <form className="form-horizontal push-5-t">
                  <div className="form-group">
                    <label className="col-xs-12" htmlFor="example-select">
                      Select User
                    </label>
                    <div className="col-sm-9">
                      <Select
                        value={selectedUser}
                        onChange={handleUserChange}
                        options={userOption}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label className="col-xs-12" htmlFor="example-select">
                          Select Team
                        </label>
                        <div className="col-sm-9">
                          {" "}
                          <Select
                            value={selectedTeam}
                            onChange={handleTeamChange}
                            options={teamOption}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-12">
                      <button
                        className="btn btn-lg btn-info"
                        onClick={handelSubmit}
                        type="submit"
                      >
                        <i className="fa fa-send push-5-r" /> Add User to Group
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("teams");
  const team = Teams.find({}, { sort: { createdAt: -1 } }).fetch();
  const user = Meteor.users.find({}).fetch();
  return {
    teams: team,
    users: user
  };
})(ManageTeams);
