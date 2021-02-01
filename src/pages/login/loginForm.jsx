import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ setLoginDetails, button_styles, login }) => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    setLoginDetails(data);
    login(data);
  };

  const form_layout = {
    display: "flex",
    flexFlow: "column",
  };

  const input_styles = {
    marginBottom: "0.5rem",
  };

  return (
    <form style={form_layout} onSubmit={handleSubmit(submitHandler)}>
      <input
        className="formInput"
        style={input_styles}
        type="text"
        placeholder="Email"
        name="email"
        ref={register}
      />
      <input
        className="formInput"
        style={input_styles}
        type="password"
        placeholder="Password"
        name="password"
        ref={register}
      />
      <button className="primaryButton" style={button_styles}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
