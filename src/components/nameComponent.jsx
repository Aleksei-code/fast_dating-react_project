import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NameComponent = (name) => {
    return (
        <>
            <Link to={name.id} key={name._id}>
                {name.name}
            </Link>
        </>
    );
};

export default NameComponent;

NameComponent.propTypes = {
    name: PropTypes.object,
    id: PropTypes.string
};
