import React from "react";
import "./FindFriend.css";
import sitraPhoto from "../../img/sitra.jpg";
function FindFriend() {
  return (
    <div className="findFriend">
      <div className="">
        <img src={sitraPhoto} alt="sitraphoto" className="findFriendImg" />
      </div>
      <div className="btnAndName">
        <h2 className="findFriendName">Sitra Mohammed</h2>
        <button className="btn">Follow</button>
      </div>
    </div>
  );
}

export default FindFriend;
