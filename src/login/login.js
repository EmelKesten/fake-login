import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("login", JSON.stringify({ username, password }));
      setLoggedIn(true);
    }
  };
  if (!loggedIn) {
    return (
      <div className="loginContainer">
        <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
    return (
        <Routes>
            <Route path='*' element={ <Navigate to="/" /> }/>
        </Routes>
    )
}

export default Login;
