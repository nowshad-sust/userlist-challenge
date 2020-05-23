import React from "react";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Modal from "./components/Modal";
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
