import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import { UserPosts, UserTodos } from "./components";

import { getUsers, getPostsByUser, getTodosByUser } from "./api";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        message.innerHTML = "This is what went wrong:" + error;
      });
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setUserPosts([]);
      setUserTodos([]);
      return;
    }

    getPostsByUser(currentUser.id).then((posts) => {
      setUserPosts(posts);
    });

    getTodosByUser(currentUser.id)
      .then((todos) => {
        setUserTodos(todos);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  return (
    <Router>
      <div id="App">
        <Header
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        {currentUser ? (
          <>
            <Routes>
              <Route path="/posts">
                <UserPosts userPosts={userPosts} currentUser={currentUser} />
              </Route>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Welcome, {currentUser.username}!
                </h2>
              </Route>
              <Navigate to="/" />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Please log in, above.
                </h2>
              </Route>
              <Navigate to="/" />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
