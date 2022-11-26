import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineInteraction } from "react-icons/ai";
import Profile from "../../components/Profile/Profile";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <Profile className="profile" />

      <button className="menuBtn">
        <MdRssFeed style={{ fontSize: "28px" }} /> <h3>Feed</h3>
      </button>
      <button className="menuBtn">
        <FaUserFriends style={{ fontSize: "28px" }} /> <h3>Friends</h3>
      </button>
      <button className="menuBtn">
        <IoMdPhotos style={{ fontSize: "28px" }} /> <h3>Photos</h3>
      </button>
      <button className="menuBtn">
        <CiSaveDown2 style={{ fontSize: "28px" }} /> <h3>saved Posts</h3>
      </button>
      <button className="menuBtn">
        <CgProfile style={{ fontSize: "28px" }} /> <h3>Profile</h3>
      </button>
      <button className="menuBtn">
        <AiOutlineInteraction style={{ fontSize: "28px" }} />{" "}
        <h3>Posts you interacted with</h3>
      </button>
      <div className="dummyPages">
        <h2 className="dummyPagesTitle">PAGES YOU MIGHT LIKE</h2>
        <div className="pagesLogoAndName">
          <button className="lrLogo">LR</button>
          <h2>Learn React</h2>
        </div>
        <div className="pagesLogoAndName">
          <button className="fdLogo">FD</button>
          <h2>Fullstack Developers</h2>
        </div>
        <div className="pagesLogoAndName">
          <button className="lbLogo">LB</button>
          <h2>Learn BlockChain</h2>
        </div>
      </div>
    </div>
  );
}

export default Menu;
