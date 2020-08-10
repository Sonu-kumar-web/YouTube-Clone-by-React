import React from "react";

const VideoDetail = (props) => {
   if (!props.video) {
      return <div>Loading...</div>;
   }
   return <div>{props.video.snippet.title}</div>;
};

export default VideoDetail;
