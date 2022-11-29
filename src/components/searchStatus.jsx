import React from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

const SearchStatus = ({ totalUsers }) => {
    if (totalUsers === 0) {
        return (
            <Badge bg="danger" className="m-1">
                <h2>No one will hang out with you today</h2>
            </Badge>
        );
    } else {
        return (
            <Badge bg="primary" className="m-1">
                <h2>{totalUsers} people will hang out with you today</h2>
            </Badge>
        );
    }
};
SearchStatus.propTypes = {
    totalUsers: PropTypes.number.isRequired
};

export default SearchStatus;
