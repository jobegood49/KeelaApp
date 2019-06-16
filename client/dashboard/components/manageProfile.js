import React, { useEffect, useState, useContext } from "react";
import ContextContainer from "../../context";

const ManageProfile = props => {
  return (
    <div id="main-container">
      <div className="content content-boxed">
        <div className="block block-bordered">
          <div className="block-header bg-gray-lighter">
            <h3 className="block-title">Update profile</h3>
          </div>
          <div className="block-content">
            <form
              className="form-horizontal push-10-t push-10"
              action="base_forms_premade.html"
              onSubmit={()=>console.log("")}
            >
              <div className="row">
                <div className="col-sm-7">
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label>Firstname</label>
                      <input
                        className="form-control input-lg"
                        type="text"
                        value=""
                        onChange={() => {console.log("")}}
                        id="mega-firstname"
                        name="mega-firstname"
                        placeholder="Enter your firstname.."
                      />
                    </div>
                    <div className="col-xs-6">
                      <label>Lastname</label>
                      <input
                        className="form-control input-lg"
                        type="text"
                        value=""
                        onChange={() => {console.log("")}}
                        id="mega-lastname"
                        name="mega-lastname"
                        placeholder="Enter your lastname.."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Username</label>
                      <input
                        className="form-control input-lg"
                        type="text"
                        value=""
                        onChange={() => {console.log("")}}
                        id="mega-username"
                        name="mega-username"
                        placeholder="Enter your username.."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Bio</label>
                      <textarea
                        className="form-control input-lg"
                        type="text"
                        value=""
                        onChange={() => {console.log("")}}
                        id="mega-bio"
                        name="mega-bio"
                        rows="22"
                        placeholder="Enter a few details about yourself.."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Where do you live?</label>
                      <input
                        className="form-control input-lg"
                        type="text"
                        value=""
                        onChange={() => {console.log("")}}
                        id="mega-city"
                        name="mega-city"
                        placeholder="Enter your location.."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Email </label>
                      <input
                        className="form-control input-lg"
                        type="text"
                        value=""
                        disabled
                        id="mega-city"
                        name="mega-city"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>City</label>
                      <input
                        className="form-control input-lg"
                        value=""
                        onChange={() => {console.log("")}}
                        type="text"
                        id="mega-age"
                        name="mega-age"
                        placeholder="Enter city.."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>State</label>
                      <input
                        className="form-control input-lg"
                        value=""
                        onChange={() => {console.log("")}}
                        type="text"
                        id="mega-age"
                        name="mega-age"
                        placeholder="Enter state.."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Mob No</label>
                      <input
                        className="form-control input-lg"
                        value=""
                        onChange={() => {console.log("")}}
                        type="number"
                        id="mega-age"
                        name="mega-age"
                        placeholder="Enter mob number.."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <button
                    className="btn btn-warning push-5-r push-10"
                    type="submit"
                  >
                    <i className="fa fa-check push-5-r" /> Update Profile
                  </button>
                  <button
                    className="btn btn-warning push-5-r push-10"
                    type="submit"
                  >
                    <i className="fa fa-check push-5-l" /> Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
