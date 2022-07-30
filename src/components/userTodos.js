import React from 'react';
import './userTodos.css';

const UserTodos = ({
  currentUser,
  userTodos
}) => {
  return (
    <div><button>New Todo Reminder</button>
    <button>Delete Todo Reminder</button></div>
    // <div className="user-todos">
    //   <h2>Todos By { currentUser }</h2>
    //   {userTodos.map(({ id, title, completed }) => (
    //     <div key={ id } className="user-todos">
    //       <h3 style={{
    //         textDecoration: completed ? 'line-through' : 'none'
    //       }}>{ title }</h3>
    //     </div>
    //   ))}
    // </div>
  );
}

export default UserTodos;