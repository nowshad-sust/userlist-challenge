import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, filterUsers, selectUsers } from "../../store/users";
import { selectKeyword } from "../../store/search";
import ListItem from "./ListItem";
import "./index.scss";

const UserList = () => {
  const { filteredUsers, loading } = useSelector(selectUsers);
  const keyword = useSelector(selectKeyword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterUsers());
  }, [keyword, dispatch]);

  const LoadingSection = (
    <div className="loading listing">Loading users...</div>
  );

  const NoResultsSection = <div className="no-result listing">No results</div>;

  const userList = (
    <ul className="green-blue-list">
      {filteredUsers.map((user) => (
        <ListItem key={user.id} {...user} />
      ))}
    </ul>
  );

  return (
    <div className="user-list">
      <h5>Results</h5>
      {loading
        ? LoadingSection
        : filteredUsers.length > 0
        ? userList
        : NoResultsSection}
    </div>
  );
};

export default UserList;
