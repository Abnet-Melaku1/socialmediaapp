import "./Share.css";
import img from "../../img/sitra.jpg";
function Share() {
  return (
    <div className="postWrapper">
      <div className="postText">
        <h3 className="postTextH3">Post Something</h3>
      </div>
      <div className="postImgAndForm">
        <img className="postImg" src={img} alt="" />
        <form className="postForm">
          <input
            className="postInput"
            placeholder="What's on your mind?"
            type="text"
          />

          <input
            id="file"
            name="choose files"
            className="postFileInput"
            placeholder="What's on your mind?"
            type="file"
          />

          <button className="postBtn" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
