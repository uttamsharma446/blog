import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
interface UserType {
  name: {
    type: String;
    required: true;
  };
  email: {
    type: String;
    required: true;
    unique: true;
  };
  password: {
    type: String;
    required: true;
    minlength: 6;
  };
  blogs: any[];
}
const UserBlogs = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      console.log(data);
      // setUser(data.user)
    });
  }, []);
  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user?.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
