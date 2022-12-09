import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import api from "../api";
import QualitiesList from "./qualitiesList";

const User = () => {
    const [user, setUser] = useState();
    const { userId } = useParams();
    const navigate = useNavigate();
    const handleReturnBack = () => {
        navigate("/users");
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return user ? (
        <>
            <NavBar />
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

export default User;
