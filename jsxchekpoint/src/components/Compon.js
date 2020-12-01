import React from "react";
import "./Compon.css";
import Img2 from "../iimg2.jpg";
import Myvideo from "../video.mp4";
import ReactPlayer from "react-player";

const Compon = () => {
  return (
    <div
      className="myCompon"
      style={{ border: "Solid 1px black", maxWidth: "100vw" }}
    >
      <h1 className="titleRed"> Mohamed Ali Mahdhaoui </h1>
      <img src="/img1.jpg" alt="myimage" style={{ width: 400 }} />
      <br />
      <img src={Img2} style={{ width: 400 }} />
      <ReactPlayer
        className="vid"
        url="https://www.youtube.com/embed/aOLxQGLJouI"
        controls
        width="320px"
        height="240px"
      />
    </div>
  );
};

export default Compon;
