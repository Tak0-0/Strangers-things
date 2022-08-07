import React from 'react';

import './userPosts.css';

const UserPosts = ({

  currentUser,
  userPosts
}) => {
  console.log("this is user posts", userPosts)
  return (
    <div className="user-posts">
      <h2>Posts By { currentUser.username }</h2>
      {userPosts.map((allposts, id) => (
        <div key={ id } className="post">
          <p> { allposts.author.username }</p>
          <h3>{ allposts.title }</h3>
          <p>{ allposts.price }</p>
        </div>
      ))}
        </div>
  );
}

export default UserPosts;
