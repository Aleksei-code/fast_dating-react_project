import React from "react";
import NavBar from "../components/navBar";
import UsersList from "../components/usersList";
import { useParams } from "react-router-dom";
import UserPage from "../components/userPage";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <NavBar />
            {userId ? <UserPage userId={userId} /> : <UsersList />}
        </>
    );
};

export default Users;