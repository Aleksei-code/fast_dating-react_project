import React, { useState } from "react";
import "./App.css";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const totalUsers = users.length;
  const pageSize = 4;

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
