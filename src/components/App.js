import React from "react";
import RandomWord from "random-words";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// API key
const KEY = "AIzaSyBjJRJz35WufQbTYfid1emq0qWwUo43AFI";

class App extends React.Component {
   state = { videos: [], selectedVideo: null };

   // Show random video
   componentDidMount() {
      this.onTermSubmit(RandomWord());
   }

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
      this.setState({
         videos: response.data.items,
         selectedVideo: response.data.items[0],
      });
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
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                     <VideoList
                        videos={this.state.videos}
                        onVideoSelect={this.onVideoSelect}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
