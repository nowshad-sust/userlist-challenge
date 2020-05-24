import React from "react";
import UserList from "./features/users/UserList";
import Search from "./features/search/Search";
import Modal from "./features/modal/Modal";
import "./App.scss";

function App() {
  return (
    <div className="App shadow-01dp">
      <Modal />
      <Search />
      <UserList />
    </div>
  );
}

export default App;
