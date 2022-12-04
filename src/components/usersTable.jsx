import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";

const UsersTable = ({
    users,
    onDelete,
    onToggleBookmark,
    selectedSort,
    onTableSort,
    ...rest
}) => {
    const columns = {
        name: { path: "name", name: "Name" },
        qualities: {
            name: "Qualities",
            component: (user) => <QualitiesList qualities={user.qualities} />
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
        <table className="table">
            <TableHeader {...{ onTableSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </table>
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
