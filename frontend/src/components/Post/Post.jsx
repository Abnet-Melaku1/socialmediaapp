import React from "react";
import "./Post.css";
import img from "../../img/sitra.jpg";
import postImg from "../../img/ivan.jpg";
import Comment from "../comment/Comment";
function Post() {
  return (
    <div className="post">
      <div className="postOwnerDetails">
        <img className="postOwnerImg" src={img} alt="" />

        <h4 className="postOwnerName">Sitra Mohammed </h4>
      </div>
      <p className="daysAgo">2 days ago</p>
      <div className="postCaptionAndImg">
        <h3 className="postCaption"></h3>
        <img src={postImg} alt="" className="postImage" />
        <Comment className="commentComponent" />
      </div>
    </div>
  );
}

export default Post;
