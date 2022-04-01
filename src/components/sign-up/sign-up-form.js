import passwordIcon from "../../images/login/password.svg";
import userNameIcon from "../../images/login/user.svg";
import emailIcon from "../../images/login/email.svg";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { renderField as Input, validate } from "./validation";

const registerForm = () => {
  return (
    <form class="login-form" id="registerForm">
      <div class="modal-form-group">
        <i class="input-icon material-icons">
          <img src={userNameIcon} />
        </i>
        <Field
          name="userName"
          id="userName"
          type="text"
          class="modal-form-input"
          label="User Name"
          component={Input}
        />
      </div>
      <div class="modal-form-group">
      <i class="input-icon material-icons">
          <img src={emailIcon} />
        </i>
        <Field
          name="email"
          id="email"
          type="email"
          class="modal-form-input"
          label="Email"
          component={Input}
        />
      </div>
      <div class="modal-form-group">
        <i class="input-icon material-icons">
          <img src={passwordIcon} />
        </i>
        <Field
          name="password"
          id="email"
          type="password"
          class="modal-form-input"
          label="Password"
          component={Input}
        />
      </div>
      <div class="modal-form-group">
        <i class="input-icon material-icons">
          <img src={passwordIcon} />
        </i>
        <Field
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          class="modal-form-input"
          label="Confirm Password"
          component={Input}
        />
      </div>

      <button class="btn btn-green signin-button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default reduxForm({
  form: "register-form",
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(registerForm));
