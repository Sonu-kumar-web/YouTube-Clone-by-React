import axios from "axios";

// const KEY = "AIzaSyBk2kyM3EC5cwfnno28nHrDsFdh5rAorDg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});
