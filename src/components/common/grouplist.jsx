import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    professions,
    handleProfessionSelect,
    contentProperty,
    valueProperty,
    selectedProf
}) => {
    return (
        <ul className="list-group">
            {Object.keys(professions).map((item) => (
                <li
                    role="button"
                    onClick={() => handleProfessionSelect(professions[item])}
                    className={
                        professions[item][contentProperty] === selectedProf
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                    key={professions[item][valueProperty]}
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
    professions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    handleProfessionSelect: PropTypes.func.isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    selectedProf: PropTypes.string
};

export default GroupList;
