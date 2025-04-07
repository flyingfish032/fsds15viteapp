import axios from "axios";
import React, { useState, useEffect } from "react";

const UserData = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  function clickHandler() {
    setButtonId(id);
  }

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${buttonId}`)
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonId]);

  return (
    <div>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
      />
      <br />
      <button onClick={clickHandler}>Get Data</button>
      <br />
      {user && (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td><img src={user.avatar} alt={user.first_name} width="50" /></td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserData;
