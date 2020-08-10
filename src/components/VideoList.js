import React from "react";
import VideoItem from "./VideoItem";

// { videos } is destructuring of props object so that we can use "videos" property directly
const VideoList = ({ videos }) => {
   //    console.log(videos);
   const renderedList = videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} />;
   });

   return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
