import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api";
import Users from "./components/users";

function App() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const pageSize = 8;

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        setUsers(
            users.map((c) => {
                if (c._id === id) {
                    c.bookmark = !c.bookmark;
                }
                return c;
            })
        );
    };

    return (
        <div className="App">
            {users !== undefined ? (
                <Users
                    users={users}
                    onDelete={handleDeleteUser}
                    onToggleBookmark={handleBookmark}
                    pageSize={pageSize}
                ></Users>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default App;
