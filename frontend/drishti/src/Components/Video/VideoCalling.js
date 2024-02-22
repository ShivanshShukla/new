import React from "react";
import "../Video/VideoCalling.css";
const VideoCalling = () => {
  return (
    <div id="videos">
      <video className="video-player" id="user-1" autoPlay playsInline></video>
      <video className="video-player" id="user-2" autoPlay playsInline></video>
    </div>
  );
};

export default VideoCalling;
