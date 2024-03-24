import React from "react";
import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
  const hasVideos = data && data.length > 0;

  return (
    <div className="video-list">
      {hasVideos && (
        <div style={{ padding: "20px 0" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Recommended Videos
          </h3>
          <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
      )}
    </div>
  );
};

export default VideoList;
