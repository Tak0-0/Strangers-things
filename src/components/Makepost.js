import { useState } from "react";
// import { Makepost } from "../api"
import "./Register.css";
import UserPosts from "./userPosts";

const Makepost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    price: "",
    willDeliver: false,
  });
  function handleSubmit(event) {
    const temptoken = localStorage.getItem("token");
    const token = temptoken.split("-")[1];
    event.preventDefault();
    fetch(
      "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: post.title,
            description: post.description,
            price: post.price,
            willDeliver: post.willDeliver,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="description"
        value={post.description}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="price"
        value={post.price}
        onChange={handleChange}
      ></input>
      <input
        type="checkbox"
        name="willDeliver"
        checked={post.willDeliver}
        onChange={(event) =>
          setPost({ ...post, willDeliver: !post.willDeliver })
        }
      ></input>

      <button type="submit">Post Listing</button>
    </form>
  );
};
export default Makepost;
