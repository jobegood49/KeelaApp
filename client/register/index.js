import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContextContainer from "../context";
import AppLoader from "../components/common/loader";
import util from "../components/common/helper";

const Register = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const Context = useContext(ContextContainer);

  const formSubmit = e => {
    e.preventDefault();
    setError("");
    if (email && password && username && repeatPassword) {
      if (!util.validateEmail(email)) {
        setError("Please enter valid email");
      } else if (password !== repeatPassword) {
        setError("Please Enter equal passwords");
      } else {
        Context.handleRegister({
          email,
          password,
          username
        });
      }
    } else {
      setError("Please enter all required fields");
    }
  };
  return (
    <ContextContainer.Consumer>
      {context => (
        <div className="content overflow-hidden">
          <AppLoader loaded={!context.state.loading} />
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="block block-themed animated fadeIn">
                <div className="block-header bg-success">
                  <ul className="block-options">
                    <li>
                      <Link
                        to="/login"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="Log In"
                      >
                        <i className="si si-login" />
                      </Link>
                    </li>
                  </ul>
                  <h3 className="block-title">Register</h3>
                </div>
                <div className="block-content block-content-full block-content-narrow">
                  <h1 className="h2 font-w600 push-30-t push-5">Technology</h1>
                  <p>
                    Please fill the following details to create a new account.
                  </p>
                  {error ? (
                    <span className="alert alert-danger alert-dismissable">
                      {error}
                    </span>
                  ) : (
                    ""
                  )}
                  <form
                    onSubmit={formSubmit}
                    className="js-validation-register form-horizontal push-50-t push-50"
                    noValidate
                  >
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-success">
                          <input
                            className="form-control"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            id="register-username"
                            name="register-username"
                            placeholder="Please enter a username"
                          />
                          <label>Username</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-success">
                          <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="register-email"
                            name="register-email"
                            placeholder="Please provide your email"
                          />
                          <label>Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-success">
                          <input
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id="register-password"
                            name="register-password"
                            placeholder="Choose a strong password.."
                          />
                          <label>Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-success">
                          <input
                            className="form-control"
                            type="password"
                            value={repeatPassword}
                            onChange={e => setRepeatPassword(e.target.value)}
                            id="register-password2"
                            name="register-password2"
                            placeholder="..and confirm it"
                          />
                          <label>Confirm Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <label className="css-input switch switch-sm switch-success">
                          <input
                            type="checkbox"
                            id="register-terms"
                            name="register-terms"
                          />
                          <span /> I agree with terms &amp; conditions
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12 col-sm-6 col-md-5">
                        <button
                          className="btn btn-block btn-success"
                          type="submit"
                        >
                          <i className="fa fa-plus pull-right" /> Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContextContainer.Consumer>
  );
};
export default Register;
