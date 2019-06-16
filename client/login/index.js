import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import ContextContainer from "../context";
import AppLoader from "../components/common/loader";

Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Context = useContext(ContextContainer);

  const formSubmit = e => {
    e.preventDefault();
    setError("");
    if (email && password) {
      if (!email) {
        setError("Please enter email");
      } else {
        Context.handleLogin({
          email,
          password
        });
      }
    } else {
      setError("Please enter all required values");
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
                <div className="block-header bg-primary">
                  <ul className="block-options">
                    <li>
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        data-toggle="tooltip"
                        data-placement="left"
                        title=""
                        data-original-title="New Account"
                      >
                        <i className="si si-plus" />
                      </Link>
                    </li>
                  </ul>
                  <h3 className="block-title">Login</h3>
                </div>
                <div className="block-content block-content-full block-content-narrow">
                  <h1 className="h2 font-w600 push-30-t push-5">
                    Team Management
                  </h1>
                  <p>Welcome, please login.</p>
                  {error ? (
                    <span className="alert alert-danger alert-dismissable">
                      {error}
                    </span>
                  ) : (
                    ""
                  )}
                  <form
                    className="js-validation-login form-horizontal push-30-t push-50"
                    onSubmit={formSubmit}
                    noValidate
                  >
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-primary floating">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="useremailname"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="login-email"
                            name="login-username"
                          />
                          <label>Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <div className="form-material form-material-primary floating">
                          <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="login-password"
                            name="login-password"
                          />
                          <label>Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <label className="css-input switch switch-sm switch-primary">
                          <input
                            type="checkbox"
                            id="login-remember-me"
                            name="login-remember-me"
                          />
                          <span /> Remember Me?
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12 col-sm-12 col-md-12">
                        <button
                          className="btn btn-block btn-primary"
                          type="submit"
                        >
                          <i className="si si-login pull-right" /> Log in
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <button
                          className="btn btn-block btn-primary push-10"
                          type="button"
                        >
                          <i className="fa fa-facebook pull-left" /> Login with
                          Facebook
                        </button>
                        <button
                          className="btn btn-block btn-info push-10"
                          type="button"
                        >
                          <i className="fa fa-share-alt pull-right" />
                          <i className="fa fa-twitter pull-left" /> Share on
                          Twitter
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
export default Login;
