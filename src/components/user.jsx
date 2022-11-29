import React from "react";
import Button from "react-bootstrap/Button";
import { Bookmark } from "./bookmark";
import { Quality } from "./quality";

export const User = ({ users, onDelete, onBookmarkChange }) => {
  return users.map((user, index) => {
    return (
      <tr key={user._id}>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>
          <Quality value={user} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate} out of 5</td>
        <td>
          <Bookmark
            value={user.bookmark}
            id={user._id}
            onBookmarkChange={onBookmarkChange}
          />
        </td>
        <td>
          <Button className="btn-danger" onClick={() => onDelete(user._id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });
};
