import React from "react";
import { User } from "./user";

const Users = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Qualities</th>
            <th scope="col">Profession</th>
            <th scope="col">Number of dates</th>
            <th scope="col">Score</th>
            <th scope="col">Bookmark</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <User props={props} onBookmarkChange={props.onBookmarkChange} />
        </tbody>
      </table>
    </>
  );
};

export default Users;
