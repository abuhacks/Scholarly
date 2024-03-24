import React from "react";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      ></p>
    );
  }

  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
