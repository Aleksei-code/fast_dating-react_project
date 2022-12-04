import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import GroupList from "./grouplist";
import api from "../api/index";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = ({ users: allUsers, pageSize, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState(null);
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const removeFilter = () => {
        setSelectedProf(null);
    };

    // if (Array.isArray(professions) === "true") {
    //     console.log("array");
    //     console.log(Array.isArray(professions));
    //     const newObject = { ...professions };
    //     console.log(newObject);
    //     return <></>;
    // } else {
    //     console.log("object");
    // }

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionSelect = (id) => {
        setCurrentPage(1);
        setSelectedProf(id.name);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession.name) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;
    const totalUsers = filteredUsers.length;

    const handleSort = (item) => {
        setSortBy(item);
    };

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        professions={professions}
                        valueProperty="_id"
                        contentProperty="name"
                        handleProfessionSelect={handleProfessionSelect}
                        selectedProf={selectedProf}
                    />
                    <button
                        onClick={removeFilter}
                        className="btn btn-primary m-2"
                    >
                        Show all
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus totalUsers={totalUsers} />
                {totalUsers > 0 && (
                    <UsersTable
                        users={usersCrop}
                        onTableSort={handleSort}
                        selectedSort={sortBy}
                        {...rest}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        totalUsers={totalUsers}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        pageSize={pageSize}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default Users;
