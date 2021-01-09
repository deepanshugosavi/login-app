import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Main(props) {
  const [loggedIn, setloggedIn] = useState(
    localStorage.getItem("loggedIn") ? true : false
  );

  const handleOnClick = () => {
    localStorage.removeItem("loggedIn");
    setloggedIn(false);
  };
  if (loggedIn)
    return (
      <div>
        <div>Main Screen</div>
        <button onClick={handleOnClick} className="login__btn">
          Logout
        </button>
      </div>
    );
  return <Redirect to="/login-app/" />;
}

export default Main;
