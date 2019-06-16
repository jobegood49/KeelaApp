import React, { useEffect, useState } from "react";
const ManageTeams = props => {
  return (
    <div id="main-container">
      <div className="content">
        <div className="block">
          <div className="block-header bg-gray-lighter">
            <h3 className="block-title">Groups Dashboard</h3>
          </div>
          <div className="block-content">
            <div className="table-responsive">
              <table className="table table-striped table-vcenter">
                <thead>
                  <tr>
                    <th className="text-center">
                      <i className="si si-user" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Access</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <img
                        className="img-avatar img-avatar48"
                        src="assets/img/avatars/avatar1.jpg"
                        alt=""
                      />
                    </td>
                    <td className="font-w600">Rebecca Reid</td>
                    <td>client1@example.com</td>
                    <td>
                      <span className="label label-success">VIP</span>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTeams;
