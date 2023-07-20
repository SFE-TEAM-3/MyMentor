import {
  signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
} from "firebase/auth";
import './style.css'
import { React, useState} from "react";
import {
  FaFacebookF, FaLinkedinIn, FaGoogle, FaExclamationTriangle,
} from "react-icons/fa";
import { auth } from "../../components/firebase/firebase";
// new
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signup } from "../../features/user";
import { Localhost }from "../../config/api";

export const Login = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState("Show");
  const [passType, setPassType] = useState("password");

  const handleSubmit = (e) => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    e.preventDefault();
    if(email.value !=="" && password.value !==""){
      const loginUser = async() => {
        try{
          const res = await axios.post(`${Localhost}/api/auth/login`, {email: email.value, password: password.value})
          console.log('user have been added successfully: ' + JSON.stringify(res.data.token))
          dispatch(signup({email: email.value})) 
          navigate("/", {replace: true})
        }catch(e){
          console.log('unable to add data: '+e.message)
        }
      }
      loginUser()
    }
  };

  const togglePassword = () => {
    if (pass !== "" && show === "Show") {
      setShow("Hide");
      setPassType("text");
      //   console.log(show);
    } else if (show === "Hide") {
      setShow("Show");
      setPassType("password");
    }
  };

  // start check empty inputs
  const checkAuth = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value === "") {
      email.style.border = "thin solid #e01b24";
      document.getElementById("error1").style.display = "block";
    }
    if (password.value === "") {
      password.style.border = "thin solid #e01b24";
      document.getElementById("icon-pass-1").style.display = "none";
      document.getElementById("error2").style.display = "block";
    } else {
      email.style.border = "none";
      password.style.border = "none";
      email.style.borderBottom = "thin solid #fed049";
      password.style.borderBottom = "thin solid #fed049";
    }
  }
  const changeEmailInput = (e) => {
    setEmail(e.target.value);
    let email = document.getElementById("email");
    if (email.value !== "") {
      document.getElementById("error1").style.display = "none";
    }
  };
  const changePassInput = (e) => {
    setPass(e.target.value);
    let password = document.getElementById("password");

    if (password.value !== "") {
      document.getElementById("icon-pass-1").style.display = "block";
      document.getElementById("error2").style.display = "none";
    }
  };
  // end check empty inputs

  // start sign in with google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    console.log("Logged in successfully");
  };
  // end sign in with google
  // start sign in with facebook
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    console.log("Logged in successfully");
  };
  // end sign in with facebook

  return (
    <div className="parent">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form d-flex flex-column" onSubmit={handleSubmit}>
          <div className="pass-container">
            <input
              className="inp-field"
              value={email}
              onChange={changeEmailInput}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
            <FaExclamationTriangle id="error1" className="error-triangle" />
          </div>
          <div className="pass-container">
            <input
              className="inp-field pass"
              value={pass}
              onChange={changePassInput}
              type={passType}
              placeholder="Password"
              id="password"
              name="password"
              required
            />
            <span id="icon-pass-1" className="toggle" onClick={togglePassword}>
              {show}
            </span>
            <FaExclamationTriangle id="error2" className="error-triangle" />
          </div>
          <button className="link-btn">Forgot your password ?</button>
          <button
            className="btn rounded-pill m-auto my-3 log"
            type="submit"
            onClick={checkAuth}
          >
            <p className="btn text-white" >
               Login
             </p>
           
          </button>
        </form>
        <div className="login-social d-flex">
          <p style={{fontSize:'18px'}}>Or login with </p>
          <button className="soc-log-btn">
            <FaLinkedinIn />
          </button>
          <button className="soc-log-btn" onClick={handleGoogleLogin}>
            <FaGoogle />
          </button>
          <button className="soc-log-btn" onClick={handleFacebookLogin}>
            <FaFacebookF />
          </button>
        </div>
        <div className="switch1">
          <p style={{fontSize:'15px'}}>Not a member yet ? </p>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            click here to sign up
          </button>
        </div>
      </div>
    </div>
  );
};
// justify-content-sm-center