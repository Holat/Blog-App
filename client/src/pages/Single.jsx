import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Edit from "../img/pen.png";
import Delete from "../img/bin.png";
import { Menu } from "../components";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post.img}`} alt="img" />
        <div className="user">
          <img src={post.userImg} alt="dp" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.desc }} />
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
