import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import GroupList from "./components/grouplist";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [professions, setProfession] = useState();
    const totalUsers = users.length;
    const pageSize = 4;

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user._id !== id));
        setProfession("123");
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

    const handleProfessionSelect = (params) => {
        console.log(params);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        console.log(professions);
    }, [professions]);

    if (totalUsers === 0) {
        return (
            <div className="App">
                <SearchStatus totalUsers={totalUsers} />
            </div>
        );
    }

    return (
        <div className="App">
            <SearchStatus totalUsers={totalUsers} />
            {professions && (
                <GroupList
                    professions={professions}
                    valueProperty="_id"
                    contentProperty="name"
                    handleProfessionSelect={handleProfessionSelect}
                />
            )}
            <Users
                users={users}
                onDelete={handleDeleteUser}
                onBookmarkChange={handleBookmark}
                totalUsers={totalUsers}
                pageSize={pageSize}
            ></Users>
        </div>
    );
}

export default App;
