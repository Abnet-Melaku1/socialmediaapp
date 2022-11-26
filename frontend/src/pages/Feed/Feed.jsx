import React from "react";
import Post from "../../components/Post/Post";
import Share from "../../components/Share/Share";
import Menu from "../Menu/Menu";
import Suggestion from "../Suggestion/Suggestion";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="menuFeed">
        <Menu />
      </div>
      <div className="shareAndPost">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="suggestionFeed">
        <Suggestion />
      </div>
    </div>
  );
}

export default Feed;
