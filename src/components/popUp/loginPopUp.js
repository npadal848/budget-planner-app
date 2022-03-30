import React, { useState } from "react";
import passwordIcon from "../../images/login/password.svg";
import userNameIcon from "../../images/login/user.svg";
import {connect} from "react-redux"
import {reduxForm, Field} from "redux-form"
import { withRouter } from "react-router-dom"
import { renderField as Input, validate} from '../common/field-validation'

const RegisterOrLoginPopup = (props) => {

  if(props.state.login.isUserLoggedin){
    props.history.replace('/')
  }

  return (
    <div className="login-modal-div">
      <div className="modal-content">
        <div className="white-bg center modal-header">
        <form className="login-form" id="login">
                <div className="modal-form-group">
                  <i className="input-icon material-icons">
                    <img src={userNameIcon} />
                  </i>
                  <Field
                    name="userName"
                    id="userName"
                    type="text"
                    className="modal-form-input"
                    label="Username or email"
                    component={Input}
                  />
                </div>
                <div className="modal-form-group">
                  <i className="input-icon material-icons">
                    <img src={passwordIcon} />
                  </i>
                  <Field
                    name="password"
                    id="password"
                    type="password"
                    className="modal-form-input"
                    label="Password"
                    component={Input}
                  />
                </div>
                <div className="modal-form-group">
                  <i className="input-icon material-icons">
                    <img src={passwordIcon} />
                  </i>
                  <Field
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    className="modal-form-input"
                    label="Confirm Password"
                    component={Input}
                  />
                </div>

                <button className="btn btn-green signin-button" type="submit">
                  Sign In
                </button>
              </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default reduxForm({
  form: "login-sign-up-form",
  validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterOrLoginPopup));
