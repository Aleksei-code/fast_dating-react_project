import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const handleReturnBack = () => {
        navigate("/users");
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return user ? (
        <>
            <div className="m-5">
                <h3>This is user {user.name}</h3>
                <div>Profession: {user.profession.name}</div>
                <QualitiesList qualities={user.qualities} />
                <div>Completed meetings: {user.completedMeetings}</div>
                <div>Rate: {user.rate}</div>
                <button
                    className="btn btn-primary mt-2"
                    onClick={handleReturnBack}
                >
                    Back to all users
                </button>
            </div>
        </>
    ) : (
        <h3>Loading...</h3>
    );
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
