import "./Register.css";
import img from "../../img/loginsvg.svg";
function Register() {
  return (
    <div className="loginMainWrapper">
      {/* <div className="loginText">
        <h1>Register and start to &nbsp; </h1>
        <h1 className="blue">connect with the world.</h1>
      </div> */}
      <div className="svgAndFormContainer">
        <div className="formWrapper">
          <form className="form">
            <h2 className="formH2"> Create Account</h2>
            <input
              className="nameFormInput"
              type="text"
              placeholder="Enter your Name"
            />
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
            <input
              className="passwordFormInput"
              type="password"
              placeholder="Retype your Password"
            />
            <button className="loginBtn" type="submit">
              Create Account
            </button>
            <h2 className="h2">already have an account ? </h2>
            <p className="createAccount">Login here</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
