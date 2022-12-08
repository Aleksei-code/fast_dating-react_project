import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onTableSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onTableSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};
Table.propTypes = {
    onTableSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};

export default Table;
