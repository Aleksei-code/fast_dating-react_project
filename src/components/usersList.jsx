import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import GroupList from "./grouplist";
import api from "../api/index";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
    const [users, setUsers] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState(null);
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const removeFilter = () => {
        setSelectedProf(null);
    };

    const handleProfessionSelect = (id) => {
        setCurrentPage(1);
        setSelectedProf(id.name);
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        setUsers(
            users.map((c) => {
                if (c._id === id) {
                    c.bookmark = !c.bookmark;
                }
                return c;
            })
        );
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession.name) ===
                      JSON.stringify(selectedProf)
              )
            : users;
        const totalUsers = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        return (
            <>
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
                                onDelete={handleDeleteUser}
                                onToggleBookmark={handleBookmark}
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
            </>
        );
    } else {
        return (
            <>
                <h3>Loading...</h3>
            </>
        );
    }
};
export default UsersList;
