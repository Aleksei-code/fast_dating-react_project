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
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Qualities</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Met, times</th>
                        <th scope="col">Score</th>
                        <th scope="col">Favourite</th>
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
    users: PropTypes.array.isRequired,
    totalUsers: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default Users;
