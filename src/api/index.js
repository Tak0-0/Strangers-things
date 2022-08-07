import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b'

export async function getPosts() {
  try {
    const {
      data
    } = await axios.get(`${ BASE }/posts`);
    console.log("this is the data from get Posts" , data.data)
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostsByUser(userId) {
  try {
    const {
      data
    } = await axios.get(`${ BASE }/users/${ userId }/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userName, userPassword){
try {
  const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: userName,
      password: userPassword
    }
  })
})


const user = await response.json()
console.log(user)

} catch (error) {
  throw(error)
}
}
//login
export async function Login(userName, userPassword){
  try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: userName,
        password: userPassword
      }
    })
  })
  
  
  const user = await response.json()
  console.log(user)
  
  } catch (error) {
    throw(error)
  }
  }