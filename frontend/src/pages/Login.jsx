import "./Login.css";
import img from "../img/loginsvg.svg";
function Login() {
  return (
    <div className="loginMainWrapper">
      {/* <div className="loginText">
        <h1>Login and start to &nbsp; </h1>
        <h1 className="blue">connect with the world.</h1>
      </div> */}
      <div className="svgAndFormContainer">
        <div className="formWrapper">
          <form className="form">
            <h2 className="formH2">Login</h2>
            <input
              className="emailFormInput"
              type="email"
              placeholder="Enter your Email"
            />
            <input
              className="passwordFormInput"
              type="password"
              placeholder="Enter Password"
            />
            <button className="loginBtn" type="submit">
              Login
            </button>
            <h2 className="h2">Don't have an accout yet? </h2>
            <p className="createAccount">Create account here</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
