import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sed culpa deserunt ratione accusamus aperiam cupiditate, quibusdam amet.",
      img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      title: "Post 2",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Post 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://plus.unsplash.com/premium_photo-1661964110162-54a342d51afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Post 4",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://images.unsplash.com/photo-1578301977886-43be7b983104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      title: "Post 5",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      title: "Post 6",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 7,
      title: "Post 7",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum debitis excepturi amet vitae necessitatibus perferendis, nihil dicta sequi odio, pariatur eius. Non inventore assumenda quasi quos, voluptas quaerat sunt?",
      img: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="post" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
