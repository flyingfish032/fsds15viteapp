import axios from 'axios';
import React, { useState } from 'react';
import './Registration.css';


const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    role: "User"
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (user.password !== user.confirmpassword) {
      alert("PASSWORD AND CONFIRM PASSWORD MISMATCHED");
      return;
    }

    try {
      const response = await axios.post("http://localhost:1010/user/register", user);
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='ENTER YOUR NAME' onChange={handleChange} required />
        <input type="email" name='email' placeholder='ENTER YOUR EMAIL' onChange={handleChange} required />
        <input type="text" name='phone' placeholder='PH NUMBER' onChange={handleChange} required />
        <input type="password" name='password' placeholder='ENTER PASSWORD' onChange={handleChange} required />
        <input type="password" name='confirmpassword' placeholder='CONFIRM PASSWORD' onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="User">USER</option>
          <option value="Admin">ADMIN</option>
        </select> <br />
        <button type='submit'>Register</button>
      </form>
    </div>
);

};

export default Registration;
