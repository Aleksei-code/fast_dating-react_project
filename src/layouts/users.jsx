import React from "react";
import NavBar from "../components/ui/navBar";
import { useParams } from "react-router-dom";
import UserPage from "../components/common/page/userPage";
import UsersListPage from "../components/common/page/usersListPage/usersListPage";
import EditUser from "../components/common/page/editUser/editUser";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <NavBar />
            {userId ? (
                edit ? (
                    <EditUser />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
