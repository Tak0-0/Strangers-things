import { useState } from "react"
import { registerUser } from "../api"
const Register = () => {

    const [userName, setUserName] = useState("")
    const [userPassword, setPassword] = useState("")

    function handleSubmit(event){
        event.preventDefault()
      const loggedInUser = registerUser(userName, userPassword)
    };

    return(
    <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event)=>{setUserName(event.target.value)}}></input>
          <input type="text" onChange={(event)=>{setPassword(event.target.value)}}></input>     

        <button type="submit">Set username and password :D</button>

    </form>
    )
    }
    export default Register