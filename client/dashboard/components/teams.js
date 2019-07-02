import React, { useState, useContext } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Teams } from "../../../imports/api/Teams";
import ContextContainer from "../../context";

const TeamsComponent = props => {
  console.log("teams", props.teams);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const Context = useContext(ContextContainer);
  const [ui, setUi] = useState("default");

  const formSubmit = e => {
    e.preventDefault();
    if (name && description) {
      Context.createNewTeam({
        name,
        description
      });
      setUi("default");
    } else {
      console.log("Please enter all required values");
    }
  };
  const TeamsDataTable = props.teams.map((item, index) => {
    const userId = Meteor.userId();
    console.log(item);
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
          <span className="label label-success">
            {item.members && item.members.includes(userId)
              ? "Joined Group"
              : "Not Joined"}
          </span>
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
    <div id="main-container">
      <div className="content">
        <div className="block">
          <div className="block-header bg-gray-lighter">
            <h3 className="block-title">Teams Dashboard</h3>
          </div>
          <div className="block-content">
            <div className="row">
              <div className="col-sm-12">
                <label>Search: &nbsp;</label>
                <input
                  type="search"
                  className="form-control"
                  placeholder="search teams"
                />
                <div className="form-inline align-search">
                  <div className="form-inline align-search">
                    <button
                      onClick={() => setUi("add-team")}
                      className="btn btn-success push-5-r push-10"
                      type="button"
                    >
                      <i className="fa fa-plus" /> Add Team
                    </button>
                    <button
                      onClick={() => setUi("default")}
                      className="btn btn-info push-5-r push-10"
                      type="button"
                    >
                      <i className="fa fa-download" /> View Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {ui === "default" ? (
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
            ) : (
              <div className="row">
                <div className=" col-md-12 block block-themed">
                  <div className="block-header bg-primary">
                    <h3 className="block-title">Add Teams</h3>
                  </div>
                  <div className="block-content">
                    <form
                      className="form-horizontal push-5-t"
                      action="base_forms_premade.html"
                      onSubmit={formSubmit}
                    >
                      <div className="form-group">
                        <label className="col-xs-12">Team Name</label>
                        <div className="col-xs-12">
                          <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your Team name.."
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-xs-12">Team Objective</label>
                        <div className="col-xs-12">
                          <input
                            className="form-control"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Enter your objective"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-xs-12">
                          <button
                            className="btn btn-sm btn-primary"
                            type="submit"
                          >
                            <i className="fa fa-arrow-right push-5-r" /> Add New
                            Team
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("teams");
  return {
    teams: Teams.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(TeamsComponent);
