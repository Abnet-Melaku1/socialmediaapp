import React from "react";
import img from "../../img/sitra.jpg";
import "./FriendsPhoto.css";
function FriendsPhoto() {
  return (
    <div className="imgWrappper">
      <img className="img" src={img} alt="" />
    </div>
  );
}

export default FriendsPhoto;
