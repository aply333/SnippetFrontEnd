import React, { useState } from "react";
import LoginForm from "./loginForm";
import { Whisper } from "rsuite";
import SignUp from "./signUp";
import { connect } from "react-redux";
import { postLogin } from "../../actions/index";
import { endpoint } from "../../endpoints/index";
import { useHistory } from "react-router-dom";
import { loginBounds, button_styles } from "./loginConst";

function Login({ postLogin, user_data, token }) {
  const [loginDetails, setLoginDetails] = useState();
  const history = useHistory();

  async function login(data) {
    let credentials = {
      email: data.email,
      key: data.password,
    };
    await postLogin(endpoint.login, credentials);
    localStorage.setItem("token", token);
    history.push("/dashboard");
  }

  return (
    <div style={loginBounds}>
      <LoginForm
        setLoginDetails={setLoginDetails}
        button_styles={button_styles}
        login={login}
      />
      <Whisper
        trigger="click"
        speaker={(props, ref) => {
          const { className, left, top } = props;
          return (
            <SignUp
              style={{ left, top }}
              className={className}
              setLoginDetails={setLoginDetails}
              ref={ref}
            />
          );
        }}
      >
        <button className="secondaryButton">Sign-Up</button>
      </Whisper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_data: state.user_data,
    token: state.token,
  };
};

export default connect(mapStateToProps, { postLogin })(Login);
