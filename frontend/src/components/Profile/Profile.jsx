import React from "react";
import "./Profile.css";
import sitraPhoto from "../../img/sitra.jpg";
function Profile() {
  return (
    <div className="profile">
      <div className="">
        <img src={sitraPhoto} alt="sitraphoto" className="userImg" />
      </div>
      <div className="name">
        <h2 className="userName">Sitra Mohammed</h2>
      </div>
    </div>
  );
}

export default Profile;
