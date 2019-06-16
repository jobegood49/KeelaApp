
import React, { useState, useContext } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const TeamsComponent = (props) => {
  return (
    <div id="main-container" >
      <div className="content">
        <div className="block">
          <div className="block-header bg-gray-lighter"><h3 className="block-title">Teams Dashboard</h3></div>
          <div className="block-content">
            <div className="row">
              <div className="col-sm-12">
                <label>Search: &nbsp;
                </label>
                <input type="search" className="form-control" placeholder="search teams" />
                <div className="form-inline align-search">
                  <button onClick={() => console.log("")} className="btn btn-success push-5-r push-10" type="button"><i className="fa fa-plus"></i> Add Team</button>
                  <button onClick={() => console.log("")} className="btn btn-info push-5-r push-10" type="button"><i className="fa fa-download"></i> View Team</button>
                </div>
              </div>
            </div>
            {'default' === 'default' ? (
              <div className="table-responsive">
                <table className="table table-striped table-vcenter">
                  <thead>
                    <tr>
                      <th className="text-center" ><i className="si si-users"></i></th>
                      <th>Team Name</th>
                      <th>Team Objective</th>
                      <th>Join Status</th>
                      <th className="text-center" >Actions</th>
                    </tr>
                  </thead>
                  
                </table>
              </div>) : (
                <div className="row">
                  <div className=" col-md-12 block block-themed">
                    <div className="block-header bg-primary">
                      <h3 className="block-title">Add Teams</h3>
                      {error ? <span className="alert alert-danger alert-dismissable">{error}</span> : ''}
                    </div>
                    <div className="block-content">
                      <form className="form-horizontal push-5-t" action="base_forms_premade.html" onSubmit={formSubmit}>
                        <div className="form-group">
                          <label className="col-xs-12" >Team Name</label>
                          <div className="col-xs-12">
                            <input className="form-control"
                              type="text"
                              value="" onChange={() => console.log("")}
                               placeholder="Enter your Team name.." />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-xs-12" >Team Objective</label>
                          <div className="col-xs-12">
                            <input className="form-control"
                              type="text"
                              value="" onChange={() => console.log("")}
                               placeholder="Enter your objective" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-xs-12" >Team Type</label>
                          <div className="col-xs-12">
                            <input className="form-control" type="text" id="login1-password" name="login1-password" placeholder="Enter your type" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <button className="btn btn-sm btn-primary" type="submit"><i className="fa fa-arrow-right push-5-r"></i> Add New Team</button>
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
  )
}

export default TeamsComponent