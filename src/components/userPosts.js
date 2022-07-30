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
      {userPosts.map(({ id, title, body}) => (
        <div key={ id } className="post">
          <h3>{ title }</h3>
          <p>{ body }</p>
        </div>
      ))}

      {
        userPosts ? userPosts.map(({id, title, body}) => (
          <div key={ id } className="post">
          <h3>{ title }</h3>
          <p>{ body }</p>
        </div>
        )) : <div> Posts failed to load, sorry</div>
        
        }
        </div>
  );
}

export default UserPosts;
