import React from "react";

import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className="video-list">
            <div style={{ padding: "20px 0"}}>
                <h3 style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold"}}>
                   Videos List
                </h3>
                <Video data ={data} onVideoSelected={onVideoSelected}/>
            </div>
        </div>
    );
};

export default VideoList