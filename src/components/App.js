import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

// API key
const KEY = "AIzaSyBk2kyM3EC5cwfnno28nHrDsFdh5rAorDg";

class App extends React.Component {
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
      console.log(response);
   };

   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
         </div>
      );
   }
}

export default App;
