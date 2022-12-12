import React from "react";
import NavBar from "../components/ui/navBar";
import { useParams } from "react-router-dom";
import UserPage from "../components/common/page/userPage";
import UsersListPage from "../components/common/page/usersListPage/usersListPage";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <NavBar />
            {userId ? <UserPage userId={userId} /> : <UsersListPage />}
        </>
    );
};

export default Users;
