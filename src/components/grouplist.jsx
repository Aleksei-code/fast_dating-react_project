import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    professions,
    handleProfessionSelect,
    contentProperty,
    valueProperty
}) => {
    return (
        <ul className="list-group">
            {Object.keys(professions).map((item) => (
                <li
                    onClick={handleProfessionSelect}
                    className="list-group-item"
                    key={[item][valueProperty]}
                >
                    {professions[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    professions: PropTypes.object.isRequired,
    handleProfessionSelect: PropTypes.func.isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired
};

export default GroupList;
