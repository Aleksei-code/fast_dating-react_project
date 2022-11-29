import React, { useState } from "react";
import Pagination from "./pagination";
import { User } from "./user";

const Users = ({ users, totalUsers, pageSize, ...rest }) => {
  console.log(rest);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };

  const usersCrop = paginate(users, currentPage, pageSize);

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
          {usersCrop.map((user) => (
            <User users={users} {...rest} key={user._id} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalUsers={totalUsers}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
