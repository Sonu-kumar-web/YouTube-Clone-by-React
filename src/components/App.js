import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// API key
const KEY = "AIzaSyBk2kyM3EC5cwfnno28nHrDsFdh5rAorDg";

class App extends React.Component {
   state = { videos: [], selectedVideo: null };

   onTermSubmit = async (term) => {
      const response = await youtube.get("/search", {
         params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: "video",
            key: KEY,
         },
      });
      // console.log(response);
      this.setState({ videos: response.data.items });
   };

   // Handle by this method when a user select any video
   onVideoSelect = (video) => {
      // console.log("From the app", video);
      this.setState({ selectedVideo: video });
   };

   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
               videos={this.state.videos}
               onVideoSelect={this.onVideoSelect}
            />
         </div>
      );
   }
}

export default App;
