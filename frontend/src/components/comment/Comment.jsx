import React from "react";
// import { FiSend } from "react-icons";
import { FiSend } from "react-icons/fi";
import img from "../../img/sitra.jpg";
import "./Comment.css";
function Comment() {
  return (
    <div className="commentWrapper">
      <div className="userImg">
        <img className="userimg" src={img} alt="" />
      </div>
      <form>
        <input className="commentText" type="text" placeholder="comment" />

        <button className="commentBtn" type="submit">
          <FiSend style={{ color: "white", fontSize: "25px" }} />
        </button>
      </form>
    </div>
  );
}

export default Comment;
