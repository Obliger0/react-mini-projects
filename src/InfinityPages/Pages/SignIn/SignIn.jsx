import { useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveCurrentUserinfo } from "../../../Redux/userSlice";
import { signInApi } from "../../../ResponsiveGallery/Api/api";

export function SignIn({ userData = [], setUserData = () => {} }) {
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleOnSubmit(e) {
    e.preventDefault();
    let email = e.target.children[0].children.email?.value;
    let pass = e.target.children[1].children.pass?.value;
    const res = await signInApi(email, pass);
    const signedUser = await res.json();
    if (res.status !== 200) {
      alert("Username or password is incorrect");
    } else {
      setPopUp(true);
      dispatch(saveCurrentUserinfo(signedUser));
      setTimeout(() => {
        if (popUp) setPopUp(false);
        navigate("/user-account");
      }, 2000);
    }
  }

  return (
    <div className="container">
      <div className="content-container">
        <div className="sign-in-content">
          <h6>Welcome to</h6>
          <div className="logo">INFINITY</div>
          <div className="subtitle">
            Log in Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione, debitis?
          </div>
          <form onSubmit={handleOnSubmit}>
            <InputComp
              forName="email"
              type={"email"}
              atPlaceholder={"🙍‍♂️ Username"}
              validationFuncType={"email"}
              errorText={"Email must contain @"}
            />
            <InputComp
              forName="pass"
              type={"password"}
              atPlaceholder={"🔑 Password"}
              validationFuncType={"password"}
              errorText={"Pass must be greater than 7 letters"}
              passwordViewer={true}
            />
            <button className="sign-in-btn">SIGN IN</button>
          </form>
          <div className="sign-up-info">
            <div>Don't have account ?</div>
            <div className="sign-up-link" onClick={() => navigate("/sign-up")}>
              {" "}
              Sign Up Now
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
      {popUp && (
        <div className="success-msg">You're Successfully Logged In</div>
      )}
    </div>
  );
}

export function InputComp({
  forName = "",
  atPlaceholder,
  validationFuncType,
  errorText,
  passwordViewer = false,
}) {
  const [noError, setNoError] = useState(true);
  const [viewPass, setViewPass] = useState(false);
  function handleEmail(e) {
    let newNoError = true;
    if (!e.target.value) newNoError = true;
    if (e.target.value.length > 4) {
      // eslint-disable-next-line
      const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      newNoError = regEx.test(e.target.value);
    }
    setNoError(newNoError);
  }

  function handlePass(e) {
    if (e.target.value.length >= 1 && e.target.value.length < 8)
      setNoError(false);
    else {
      if (noError === false) setNoError(true);
    }
  }
  return (
    <>
      <div className={`${noError ? "input-div" : "input-div red-border"}`}>
        <input
          name={forName}
          className="pass-input"
          type={passwordViewer ? (viewPass ? "text" : "password") : "text"}
          placeholder={atPlaceholder}
          required
          onChange={validationFuncType === "email" ? handleEmail : handlePass}
        />
        {passwordViewer && (
          <button
            className="pass-btn"
            type="button"
            onClick={() => {
              if (viewPass === false) setViewPass(true);
              if (viewPass === true) setViewPass(false);
            }}
            onBlur={() => {
              setViewPass(false);
            }}
          >
            {viewPass ? "🔓" : "🔒"}
          </button>
        )}
      </div>
      {!noError && <span className="absolute-span">{errorText}</span>}
    </>
  );
}
