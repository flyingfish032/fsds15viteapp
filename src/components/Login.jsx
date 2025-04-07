import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1010/user/login", { email, password });

      if (response.data === "Login successfull") {
        alert("Login successful!");
        //localStorage.setItem("user", email);
        setError("");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.log("Error logging in", error);
    }
  };

  return (
    <div className="container1">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;