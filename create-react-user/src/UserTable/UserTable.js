import React from "react";

function UserTable({ users, deleteUser, setEditing, editRow }) {
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
                <button
                  className="button muted-button"
                  onClick={() => {
                    editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="alert alert-danger">
            <td>-- You must insert a Name --</td>
            <td className="alert alert-danger"></td>
            <td className="alert alert-danger"></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export { UserTable };
