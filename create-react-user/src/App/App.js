import React from "react";
import { useState } from "react";
import { UserTable } from "../UserTable/UserTable";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  // Initial State
  const usersData = [
    { id: uuidv4(), name: "Nathalia", userName: "NatVanner" },
    { id: uuidv4(), name: "Craig", userName: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", userName: "benisphere" },
  ];

  // const usersData = [];

  // State
  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
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
