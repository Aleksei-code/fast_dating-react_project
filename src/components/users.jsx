import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import { User } from "./user";
import PropTypes from "prop-types";

const Users = ({ users, totalUsers, pageSize, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
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
Users.propTypes = {
    users: PropTypes.object.isRequired,
    totalUsers: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default Users;
