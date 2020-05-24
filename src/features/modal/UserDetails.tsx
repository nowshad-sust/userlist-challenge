import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "./store";
import { User } from "../users/types";

const UserDetails = ({ id, name, username, email, website }: User) => {
  const dispatch = useDispatch();

  return (
    <div className="user-details shadow-01dp">
      <h5>User Details</h5>
      <ul className="green-blue-list">
        <li className="green-blue-list-item">
          <span className="label listing">Name: </span>
          <span className="listing">
            <b>{name}</b>
          </span>
        </li>
        <li className="green-blue-list-item">
          <span className="label listing">Username: </span>
          <span className="listing">
            <b>{username}</b>
          </span>
        </li>
        <li className="green-blue-list-item">
          <span className="label listing">Email: </span>
          <span className="listing">
            <b>{email}</b>
          </span>
        </li>
        <li className="green-blue-list-item">
          <span className="label listing">Website: </span>
          <span className="listing">
            <a href={"//" + website} target="_blank" rel="noopener noreferrer">
              <b>{website}</b>
            </a>
          </span>
        </li>
      </ul>
      <button
        onClick={() => dispatch(toggleModal())}
        className="btn-outline btn-md"
      >
        Close
      </button>
    </div>
  );
};

export default UserDetails;
