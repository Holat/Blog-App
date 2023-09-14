import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/pen.png";
import Delete from "../img/bin.png";
import { Menu } from "../components";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          asperiores esse? Temporibus quos expedita laboriosam voluptate, dolore
          provident sint id. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Praesentium maxime, atque neque magnam perferendis, molestiae
          nisi dolorem tenetur expedita explicabo itaque minus et, similique
          officiis voluptatem repudiandae molestias quia delectus.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          sunt architecto quam laborum omnis tempore cumque velit quia. Ipsa,
          ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          maxime mollitia totam aperiam commodi optio exercitationem vitae,
          libero voluptates odio, quo sunt esse ducimus aliquid! Delectus,
          ullam. Suscipit quod quasi ex facere fugit eos dicta nam, non quas.
          Quasi, facere!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          deserunt rerum nostrum deleniti id ipsum, dolorum alias vero
          reprehenderit enim est soluta cum facilis rem, dolor ducimus incidunt
          autem officia ratione vitae debitis porro! Quibusdam, nobis.
          Aspernatur maiores molestiae, hic expedita eligendi, officiis eveniet
          quidem excepturi maxime, delectus distinctio beatae nihil impedit
          ipsam animi ut earum. A illo officiis voluptatem alias ducimus eos
          minima modi, architecto nihil. Consectetur eligendi ut ad natus,
          deleniti architecto vel adipisci asperiores error. Similique, ratione
          accusamus. Rem quas saepe sequi consequatur voluptates quasi officiis,
          libero corrupti atque quos, repudiandae laudantium similique suscipit,
          iste assumenda numquam?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
