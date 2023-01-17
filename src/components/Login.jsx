import React, { useState, useEffect } from "react";
import facade from "../facades/apiFacade";
import { useNavigate } from "react-router-dom"


const Login = ({ setLoggedIn, setErrorMsg }) => {

  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const navigate = useNavigate()

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const login = async (username, password) => {
    await facade.login(username, password)
        .then(res => {
          setLoggedIn(true)
          navigate("/profile")
        })
        .catch(err => {
          err.fullError.then(e => setErrorMsg(e.message))
          navigate("/error")
        })
}

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="login-container">
      <form onChange={onChange}>
        <input type="text" placeholder="username" id="username" required />{' '}
        <input type="password" placeholder="password" id="password" required />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
