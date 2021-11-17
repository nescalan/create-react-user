import { useState } from "react";
import { UserTable } from "../UserTable/UserTable";
import "./App.css";

function App() {
  // Initial State
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
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
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
