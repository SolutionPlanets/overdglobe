import React from 'react'
import { Link } from "react-router";
import "./login.scss";

const Login = () => {

  /* const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }; */
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Jai Jinendra</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          {<Link to="/register">
            <button>Register</button>
          </Link> }
        </div>
        <div className="right">
          <h1>Login</h1>
          {<form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button >Login</button>
            {/* <button onClick={handleLogin}>Login</button> */}
          </form>}
        </div>
      </div>
    </div>
  )
}

export default Login
