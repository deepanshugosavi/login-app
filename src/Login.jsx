import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleOnClick = () => {
    console.log(loginData);
    if (
      loginData.email === "deepanshugosawi" &&
      loginData.password === "Pass@123"
    )
      setLoginData({ loggedIn: true });
  };
  const handleOnChange = (event) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  if (loginData.loggedIn) return <Redirect to="/login-app/main/" />;
  return (
    <div className="main__container">
      <h3>LOGIN </h3>
      <label htmlFor="email">
        <SiMinutemailer /> Email or Username:
      </label>
      <input
        id="email"
        placeholder="Enter your email or username"
        type="text"
        autoComplete="off"
        value={loginData.email}
        onChange={handleOnChange}
      />
      <label htmlFor="password">
        <RiLockPasswordLine />
        Password:
      </label>
      <input
        id="password"
        placeholder="Enter your password"
        type="password"
        value={loginData.password}
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick} className="login__btn">
        Submit
      </button>
    </div>
  );
}

export default Login;
