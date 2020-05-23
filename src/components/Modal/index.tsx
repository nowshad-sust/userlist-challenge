import React from "react";
import { useSelector } from "react-redux";
import { selectModalStatus } from "../../store/modal";
import { selectUsers } from "../../store/users";
import UserDetails from "./UserDetails";
import "./index.scss";

const Modal = () => {
  const { currentUser } = useSelector(selectUsers);
  const isOpen = useSelector(selectModalStatus);

  return (
    <div className={`modal ${isOpen ? "open" : "close"}`}>
      {currentUser && <UserDetails {...currentUser} />}
    </div>
  );
};

export default Modal;
