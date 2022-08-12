import { useState } from "react"
// import { Makepost } from "../api"
import './Register.css'

export async function Makepost( title, description, price, willDeliver, token ){

  fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
method: "POST",
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
},
    body: JSON.stringify({
    post: {
    title: title,
    description: description,
    price: price,
    willDeliver: willDeliver,
    
  }
})
}).then(response => response.json())
.then(result => { 
  console.log(result);
})
.catch(console.error);
}

const makepost = ({title, description, price, willDeliver, token}) => {

    const allInputMakePosts = [title, price, willDeliver, token] = useState("")
    

    function handleSubmit(event){
        event.preventDefault()
    };
      console.log(allInputMakePosts)
    return(
    <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event)=>{(event.target.value)}}></input>
          <input type="text" onChange={(event)=>{setPassword(event.target.value)}}></input>
            

        <button type="submit">Post Listing</button>

    </form>
    )    

    }
    export default makepost