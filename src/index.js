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
import Login from "./components/Login"
import Header from "./components/header";
import {Makepost, UserPosts} from "./components";
import Register from "./components/Register"
import { Axios } from "axios";
const BASE = 'https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b'

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [userPassword, setUserPassword] = useState([]);
  const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
     async function getPosts() {
      try {
        const {
          data
        } = await axios.get(`${ BASE }/posts`);
        console.log("this is the data from get Posts" , data.data)
        setUserPosts(data.data.posts)
      } catch (error) {
        throw error;
      }
    }
    getPosts()
  },[]);

  // useEffect(() => {
  //   getPosts()
  //     .then((data) => {
  //       setUserPosts(data.posts);
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     });
  // }, []);
// console.log(userPosts)
  // useEffect(() => {
  //   getUsers()
  //     .then((users) => {
  //       setUserList(users);
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!currentUser) {
  //     setUserPosts([]);
  //     return;
  //   }

  //   getPostsByUser(currentUser.id).then((posts) => {
  //     setUserPosts(posts);
  //   });

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [currentUser]);

  return (
    // <Router>
    //   <div id="root">
        // <Header />
    //   </div>
    // </Router>
    // currentUser, setCurrentUser, userList
    <Router>
       <Header currentUser={currentUser} setCurrentUser={setCurrentUser} userList={userList} userLogin={userLogin} />
        {/* {currentUser ? (
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
                          </Routes>
          </>
        ) : ( */}

           
          

          <>
            <Routes>
              <Route path="/makepost" element={<Makepost/>}/>
              <Route path="/register" element={<Register/>}/>
              {/* <Route path="/todos" element = {<UserTodos/>}/> */}
              <Route path="/login" element={<Login 
              userLogin={userLogin} setUserLogin={setUserLogin} userPassword={userPassword} setUserPassword={setUserPassword}/>}/>
              <Route path="/posts" element={<UserPosts
              userPosts={userPosts} currentUser={currentUser} 
              />}/>
            </Routes>
          </>
        {/* )} */}
    </Router>
  );

};

ReactDOM.render(<App />, document.getElementById("root"));
