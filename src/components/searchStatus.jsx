import React from "react";
import Badge from "react-bootstrap/Badge";

const SearchStatus = (props) => {
  if (props.totalUsers === 0) {
    return (
      <Badge bg="danger" className="m-1">
        <h2>No one will hang out with you today</h2>
      </Badge>
    );
  } else {
    return (
      <Badge bg="primary" className="m-1">
        <h2>{props.totalUsers} people will hang out with you today</h2>
      </Badge>
    );
  }
};

export default SearchStatus;
