import React from "react";

function UserTable({ users }) {
  console.log("ESte es users.name" + users.name);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.userName}</td>
              <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="alert alert-danger">
            <td>-- You must insert a Name --</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export { UserTable };
