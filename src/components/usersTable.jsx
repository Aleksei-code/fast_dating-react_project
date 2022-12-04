import React from "react";
import { User } from "./user";
import PropTypes from "prop-types";

const UsersTable = ({ users, currentSort, onTableSort, ...rest }) => {
    const handleSort = (item) => {
        currentSort.iter === item
            ? onTableSort({
                  ...currentSort,
                  order: currentSort.order === "asc" ? "desc" : "asc"
              })
            : onTableSort({ iter: item, order: "asc" });
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => handleSort("name")} scope="col">
                        Name
                    </th>
                    <th onClick={() => handleSort("qualities")} scope="col">
                        Qualities
                    </th>
                    <th
                        onClick={() => handleSort("profession.name")}
                        scope="col"
                    >
                        Profession
                    </th>
                    <th
                        onClick={() => handleSort("completedMeetings")}
                        scope="col"
                    >
                        Completed Meetings
                    </th>
                    <th onClick={() => handleSort("rate")} scope="col">
                        Rate
                    </th>
                    <th onClick={() => handleSort("bookmark")} scope="col">
                        Bookmark
                    </th>
                    <th onClick={() => handleSort()} />
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onTableSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};

export default UsersTable;
