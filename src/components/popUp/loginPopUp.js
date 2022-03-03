import React from "react";
import passwordIcon from "../../images/login/password.svg";
import userNameIcon from "../../images/login/user.svg";

const RegisterOrLoginPopup = () => {
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
              <form class="login-form" id="Login">
                <div class="modal-form-group">
                  <i class="input-icon material-icons">
                    <img src={userNameIcon} />
                  </i>
                  <input
                    name="user"
                    id="luser"
                    required="required"
                    type="text"
                    class="modal-form-input"
                    placeholder="Username or email"
                  />
                </div>
                <div class="modal-form-group">
                  <i class="input-icon material-icons">
                    <img src={passwordIcon} />
                  </i>
                  <input
                    name="pass"
                    id="password"
                    type="password"
                    required="required"
                    class="modal-form-input"
                    placeholder="Password"
                  />
                </div>

                <button class="btn btn-green signin-button" type="submit">
                  Sign In
                </button>
              </form>
            </section>
            <section id="content2">
              <form class="login-form" id="Login">
                <div class="modal-form-group">
                  <input
                    name="userName"
                    id="userName"
                    required="required"
                    type="text"
                    class="modal-form-input"
                    placeholder="User Name"
                  />
                </div>
                <div class="modal-form-group">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required="required"
                    class="modal-form-input"
                    placeholder="Email"
                  />
                </div>
                <div class="modal-form-group">
                  <input
                    name="password"
                    id="email"
                    type="password"
                    required="required"
                    class="modal-form-input"
                    placeholder="Password"
                  />
                </div>
                <div class="modal-form-group">
                  <input
                    name="password"
                    id="confirmPassword"
                    type="password"
                    required="required"
                    class="modal-form-input"
                    placeholder="Confirm Password"
                  />
                </div>

                <button class="btn btn-green signin-button" type="submit">
                  Sign Up
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOrLoginPopup;
