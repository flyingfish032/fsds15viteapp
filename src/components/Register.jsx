import React from 'react'
import "./Register.css"

function Register() {
  return (
    <div class="Register">
    <h2><u>Register</u></h2>
    <form>
       <div class="form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" ></input>
        </div>
        <div class="form">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" ></input>
        </div>
        <div class="form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" ></input>
        </div>
        <div class="form">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" ></input>
        </div>
        <div class="button">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
    </form>
</div>
  )
}

export default Register