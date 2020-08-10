import React from "react";

// Destructuring the props object
const VideoDetail = ({ video }) => {
   if (!video) {
      return <div>Loading...</div>;
   }
   return (
      <div>
         <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
         </div>
      </div>
   );
};

export default VideoDetail;
