import React from "react";
import {connect} from "react-redux"
import LoginForm from "../login/login-form"
import RegisterForm from "../sign-up/sign-up-form"

const RegisterOrLoginPopup = (props) => {

  if(props.state.login.isUserLoggedin){
    props.history.replace('/')
  }

  return (
    <div className="login-modal-div">
      <div className="modal-content">
        <div className="white-bg center modal-header">
          <div class="login-register-div">
            <input id="tab1" type="radio" name="tabs" checked />
            <label class="tab-label" for="tab1">
              Sign In
            </label>

            <input id="tab2" type="radio" name="tabs" />
            <label class="tab-label" for="tab2">
              Sign Up
            </label>
            <section id="content1">
              <LoginForm />
            </section>
            <section id="content2">
              <RegisterForm />
            </section>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterOrLoginPopup);
