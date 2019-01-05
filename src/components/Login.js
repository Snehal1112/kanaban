import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authenticate } from "../actions/Authentication";
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFails: false,
      loginError: "Please check Username/Password...."
    };
  }

  onClickLogin(e) {
    e.preventDefault();
    let form = e.target.form;
    let payLoad = {
      username: form["username"].value,
      password: form["password"].value
    };
    this.props.authenticate(payLoad);
  }

  render() {
    return (
      <div className="login-container">
        <form className="login" method="POST">
          <div className="login-title-container">
            <h1 className="title">Login</h1>
          </div>
          <div className="input-field">
            <input type="text" name="username" placeholder="User name" />
          </div>
          <div className="input-field">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <div className={`errors ${this.props.result.is_oauth ? "hide" : ""}`}>
            <span>{this.props.result.message}</span>
          </div>
          <input
            type="submit"
            onClick={e => this.onClickLogin(e)}
            value="Login"
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  result: PropTypes.object
};

const mapStateToProps = state => ({
  result: state.auth.result
});

export default connect(
  mapStateToProps,
  { authenticate }
)(Login);
