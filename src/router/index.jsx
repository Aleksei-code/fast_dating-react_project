import React from "react";
import Error404 from "../components/error404";
import Users from "../layouts/users";
import Login from "../layouts/login";
import Main from "../layouts/main";
import User from "../components/user";

function Router() {
    const router = [
        { path: "*", element: <Error404 /> },
        { path: "/", element: <Main /> },
        { path: "/users/", element: <Users /> },
        { path: "/users/:userId", element: <User /> },
        { path: "/login", element: <Login /> }
    ];
    return router;
}

export default Router;
