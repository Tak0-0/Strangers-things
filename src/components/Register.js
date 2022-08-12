import { useState } from "react"
import { registerUser } from "../api"
import './Register.css'
const Register = () => {

    const [userName, setUserName] = useState("")
    const [userPassword, setPassword] = useState("")

   async function handleSubmit(event){
    console.log(userName, userPassword)
        event.preventDefault()
        try {
    const Registervar = await fetch(`https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        userName: userName,
        userPassword:userPassword
      }
    })
  })
  const Registerdata = await Registervar.json()
  console.log(Registerdata)
        } catch (error) {
          console.log(error)
        }
          };

    return(
    <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event)=> setUserName(event.target.value)}></input>
          <input type="text" onChange={(event)=> setPassword(event.target.value)}></input>     

        <button type="submit">Register</button>

    </form>
    )
    }
    export default Register