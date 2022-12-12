import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark";
import Qualities from "./qualities";
import Table, { TableBody, TableHeader } from "../common/table";
import { Link } from "react-router-dom";

const UsersTable = ({
    users,
    onDelete,
    onToggleBookmark,
    selectedSort,
    onTableSort
}) => {
    const columns = {
        name: {
            name: "Name",
            path: "name",
            component: (user) => (
                <Link to={user.id} key={user._id}>
                    {user.name}
                </Link>
            )
        },
        qualities: {
            name: "Qualities",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: {
            path: "profession.name",
            name: "Profession"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Completed Meetings"
        },
        rate: {
            path: "rate",
            name: "Rate"
        },
        bookmark: {
            path: "bookmark",
            name: "Bookmark",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookmark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table>
            <TableHeader {...{ onTableSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onTableSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
