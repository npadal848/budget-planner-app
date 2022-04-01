import passwordIcon from "../../images/login/password.svg";
import userNameIcon from "../../images/login/user.svg";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { renderField as Input, validate } from "./validation";

const loginForm = () => {
  return (
    <div>
      <form class="login-form" id="Login">
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
            <img src={passwordIcon} />
          </i>
          <Field
            name="password"
            id="password"
            type="password"
            class="modal-form-input"
            label="Password"
            component={Input}
          />
        </div>

        <button class="btn btn-green signin-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default reduxForm({
  form: "login-form",
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(loginForm));
