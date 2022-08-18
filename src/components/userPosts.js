import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./userPosts.css";

const UserPosts = ({
  currentUser,
  userPosts,
  userLogin,
  currentToken,
  updateReceived,
  setUpdateReceived,
}) => {
  console.log("this is user posts", userPosts);

  function postDelete(id) {
    fetch(
      `https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUpdateReceived(updateReceived + 1);
      })
      .catch(console.error);
  }

  return (
    <div className="user-posts">
      <h2>Posts By {currentUser.username}</h2>
      {userPosts.map((post, id) => (
        <div key={id} className="post">
          <p> {post.author.username}</p>
          <h3>{post.title}</h3>
          <p>{post.price}</p>
          {post.author.username == userLogin && (
            <Fragment>
              <button onClick={() => postDelete(post._id)}>DELETE POST</button>
              <Link to={`/editpost/${post._id}`}>
                <button>EDIT POST</button>
              </Link>
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
