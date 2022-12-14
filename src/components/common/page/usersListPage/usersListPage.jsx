import React, { useState, useEffect } from "react";
import { paginate } from "../../../../utils/paginate";
import Pagination from "../../pagination";
import GroupList from "../../grouplist";
import api from "../../../../api";
import SearchStatus from "../../../ui/searchStatus";
import UsersTable from "../../../ui/usersTable";
import _ from "lodash";

const UsersListPage = () => {
    const [users, setUsers] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const removeFilter = () => {
        setSelectedProf(null);
    };

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
        console.log(item);
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

    const handleSearchQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = searchQuery
            ? users.filter(
                  (user) =>
                      user.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : users;
        console.log(users);
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

                        <>
                            <form className="mt-2 mb-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                        onChange={handleSearchQuery}
                                        value={searchQuery}
                                    ></input>
                                </div>
                            </form>
                            <UsersTable
                                users={usersCrop}
                                onTableSort={handleSort}
                                selectedSort={sortBy}
                                onDelete={handleDeleteUser}
                                onToggleBookmark={handleBookmark}
                            />
                        </>

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
export default UsersListPage;
