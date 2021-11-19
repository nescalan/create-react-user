import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./App.css";

// Local Modules
import { AddUserForm } from "../AddUserForm/AddUserForm";
import { UserTable } from "../UserTable/UserTable";

function App() {
  // Initial State
  const usersData = [
    { id: uuidv4(), name: "Nathalia", userName: "NatVanner" },
    { id: uuidv4(), name: "Marco", userName: "Cachorro" },
  ];

  // State
  const [users, setUsers] = useState(usersData);

  // Add New User
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(toString(user));
    setUsers([...users, user]);
    console.log(user.userName);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
