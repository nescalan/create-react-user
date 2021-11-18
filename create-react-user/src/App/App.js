import React from "react";
import { useState } from "react";
import { UserTable } from "../UserTable/UserTable";
import "./App.css";

function App() {
  // Initial State
  const usersData = [
    { id: 1, name: "Nathalia", userName: "NatVanner_Rica_Mamacita" },
    { id: 2, name: "Craig", userName: "siliconeidolon" },
    { id: 3, name: "Ben", userName: "benisphere" },
  ];

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
