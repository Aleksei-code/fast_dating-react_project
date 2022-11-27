import React, { useState } from "react";
import api from "../api/";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const totalUsers = users.length;
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const renderUsers = () => {
    return users.map((users, index) => {
      return (
        <tr key={users._id}>
          <th scope="row">{index + 1}</th>
          <td>{users.name}</td>
          <td>
            {users.qualities.map((quality) => (
              <Badge bg={quality.color} className="m-1">
                {quality.name}
              </Badge>
            ))}
          </td>
          <td>{users.profession.name}</td>
          <td>{users.completedMeetings}</td>
          <td>{users.rate} out of 5</td>
          <td>{users.bookmark}</td>
          <td>
            <Button
              className="btn-danger"
              onClick={() => handleDeleteUser(users._id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <Badge bg="primary" className="m-1">
        <h1>Total people: {totalUsers}</h1>
      </Badge>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Qualities</th>
            <th scope="col">Profession</th>
            <th scope="col">Number of dates</th>
            <th scope="col">Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  );
};

export default Users;
