import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputComp } from "../SignIn/SignIn";
import { signUpApi } from "../../../ResponsiveGallery/Api/api";

export function SignUp({ userData = [], setUserData = () => {} }) {
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    let name = e.target.children[0].children.name?.value;
    let email = e.target.children[2].children.email?.value;
    let pass = e.target.children[3].children.pass?.value;
    if (userData.length > 0) {
      for (const obj of userData) {
        if (email === obj.email) {
          // email = "";
          return alert("email already exists");
        }
      }
    }
    signUpApi(name, email, pass);
    setPopUp(true);
    name = "";
    email = "";
    pass = "";
    setTimeout(() => {
      setPopUp(false);
      navigate("/");
    }, 3000);
  }
  return (
    <div className="container">
      <div className="content-container">
        <div className="sign-in-content">
          <h6>Welcome to</h6>
          <div className="logo">Infinity</div>
          <div className="subtitle">
            Sign Up Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione, debitis?
          </div>
          <form onSubmit={handleOnSubmit}>
            <InputComp atPlaceholder={"Name"} forName="name" />
            <InputComp
              forName="email"
              atPlaceholder={"Email"}
              validationFuncType={"email"}
              errorText={"Email must contain @"}
            />
            <InputComp
              forName="pass"
              atPlaceholder={"Password"}
              validationFuncType={"password"}
              errorText={"Pass must be greater than 7 letters"}
              passwordViewer={true}
            />
            <button className="sign-in-btn">SIGN UP</button>
          </form>
          <div className="sign-up-info">
            <div>Already have a account</div>
            <div
              className="sign-up-link"
              onClick={() => navigate("/")}
            >
              {" "}
              Log In
            </div>
          </div>
          <label>____ Or ____</label>
          <div className="sign-up-options">
            <p>Continue with Social media</p>
            <div className="options-card">
              <img
                src="https://www.freepnglogos.com/x-twitter-png-logo-3.jpg"
                alt="twitter"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                alt="google"
              />
              <img src="https://pngimg.com/d/github_PNG27.png" alt="linkedIn" />
            </div>
          </div>
        </div>
        <div className="org-content">
          <div className="image-cover">
            <h1>Infinity</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              debitis illo incidunt eos non cum tempora amet nulla atque, harum
              et exercitationem ut itaque obcaecati repudiandae delectus, ea
              eveniet nostrum?
            </p>
          </div>
        </div>
      </div>
      {popUp && <div className="success-msg">Your account is created</div>}
    </div>
  );
}
