import React, { useState } from "react";
import Pagination from "./pagination";
import { User } from "./user";

const Users = ({ users, totalUsers, pageSize, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };

  const usersCrop = paginate(users, currentPage, pageSize);
  console.log(usersCrop);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Провфессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {usersCrop.map((user) => (
            <User {...rest} {...user} key={user._id} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalUsers={totalUsers}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
      />
    </>
  );
};

export default Users;
