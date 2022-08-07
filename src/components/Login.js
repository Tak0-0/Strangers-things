import React from "react"
import { useState } from "react"
import './Login.css'
const BASE = 'https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b'
const Login = ({userLogin, setUserLogin, userPassword, setUserPassword}) => 
{
  console.log(userLogin)
  console.log(userPassword)
  const LoginUser = async (event)=>{
  event.preventDefault()
  fetch(`${BASE}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: userLogin,
      password: userPassword
    }
  })
}).then((response) => response.json())
  .then((result) => 
  { window.localStorage.setItem("token", result.data.token);
    setUserToken(localStorage.getItem("tokens"));}
  )
  .catch(console.error);
}
return(
  <div className="Loginbox">

  <h3>Login Here</h3>

  <form className="Logininput" onSubmit={LoginUser}>
  <p className="Logininput">username</p>
  <input className="Logininput" type="text" onChange={(event)=>setUserLogin(event.target.value)}></input> <br></br>
  <p className="Logininput">password</p>
  <input className="Logininput" type="text" onChange={(event)=>setUserPassword(event.target.value)}></input>
  <button className="Logininput" type="submit">LOGIN</button>
  </form>
  </div>


  )


}
export default Login 