import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/header";
import UserPosts from "./components/userPosts.js";
import Makepost from "./components/Makepost.js";
import Editpost from "./components/Editpost.js";
import Register from "./components/Register";
import { Axios } from "axios";
const BASE = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [userPassword, setUserPassword] = useState([]);
  const [userLogin, setUserLogin] = useState("");
  const [currentToken, setCurrentToken] = useState(null);
  const [updateReceived, setUpdateReceived] = useState(0);
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await axios.get(`${BASE}/posts`);
        console.log("this is the data from get Posts", data.data);
        setUserPosts(data.data.posts);
      } catch (error) {
        throw error;
      }
    }
    getPosts();
  }, [updateReceived]);

  useEffect(() => {
    const temptoken = localStorage.getItem("token");
    if (temptoken) {
      const username = temptoken.split("-")[0];
      const token = temptoken.split("-")[1];
      setUserLogin(username);
      setCurrentToken(token);
    }
  }, []);

  return (
    <Router>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userList={userList}
        userLogin={userLogin}
        setUserLogin={setUserLogin}
        setCurrentToken={setCurrentToken}
      />

      <>
        <Routes>
          <Route
            path="/makepost"
            element={
              <Makepost
                updateReceived={updateReceived}
                setUpdateReceived={setUpdateReceived}
              />
            }
          />

          <Route
            path="/editpost/:id"
            element={
              <Editpost
                userPosts={userPosts}
                updateReceived={updateReceived}
                setUpdateReceived={setUpdateReceived}
              />
            }
          />

          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                userLogin={userLogin}
                setUserLogin={setUserLogin}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
                setCurrentToken={setCurrentToken}
              />
            }
          />
          <Route
            path="/posts"
            element={
              <UserPosts
                userPosts={userPosts}
                currentUser={currentUser}
                userLogin={userLogin}
                currentToken={currentToken}
                updateReceived={updateReceived}
                setUpdateReceived={setUpdateReceived}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
