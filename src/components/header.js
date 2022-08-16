import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({
  currentUser,
  setCurrentUser,
  userList,
  userLogin,
  setUserLogin,
}) => {
  const [selectedUser, setSelectedUser] = useState([]);
  // const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    setSelectedUser(userList[0]);
  }, [userList]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSelectChange = (event) => {
    const id = event.target.value;
    const user = userList.find((user) => user.id == id);
    setSelectedUser(user);
  };

  const handleUserLogin = (event) => {
    setCurrentUser(selectedUser);
  };

  const handleUserLogout = (event) => {
    setSelectedUser(userList[0]);
    setCurrentUser(null);
    localStorage.removeItem("token");
    setUserLogin("");
  };
  console.log("this is my user list", userList);
  return (
    <header>
      {userLogin ? <p> {userLogin} is currently logged in </p> : null}
      <h1>Welcome to Stranger's Things</h1>
      <form className="user-select" onSubmit={handleSubmit}>
        <NavLink to="/posts">POSTS</NavLink>
        {userLogin ? (
          <>
            <a onClick={handleUserLogout}>LOGOUT</a>
          </>
        ) : (
          <>
            <NavLink to="/register">REGISTER</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
          </>
        )}
        <NavLink to="/makepost">MAKE NEW POST</NavLink>{" "}
        {
          // <select onChange={handleSelectChange}>
          //   {userList.length && userList.map((user) => (
          //     <option key={user.id} value={user.id}>
          //       {user.username}
          //     </option>
          //   ))}
          // </select>
        }
      </form>
    </header>
  );
};

export default Header;
