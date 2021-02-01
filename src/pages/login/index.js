import React, { useState } from "react";
import LoginForm from "./loginForm";
import { Whisper } from "rsuite";
import SignUp from "./signUp";
import { connect } from "react-redux";
import { postLogin } from "../../actions/index";
import { endpoint } from "../../endpoints/index";
import { useHistory } from "react-router-dom"

function Login({ postLogin, user_data, token }) {
  const [loginDetails, setLoginDetails] = useState();
  const history = useHistory();
  const login = (data) => {
    let credentials = {
      email: data.email,
      key: data.password,
    };
    postLogin(endpoint.login, credentials);
    localStorage.setItem("token",token)
    history.push('/dashboard')
  };
  const signUpHandler = (data) => {};

  const loginBounds = {
    margin: "15rem auto",
    width: "15rem",
  };

  const button_styles = {
    width: "5rem",
    marginBottom: "0.5rem",
  };

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

      <br />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          localStorage.setItem("test", "test on log")
          console.log(loginDetails, "userdata: ", user_data);
        }}
      >
        Console Log
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_data: state.user_data,
    token: state.token
  };
};

export default connect(mapStateToProps, { postLogin })(Login);
