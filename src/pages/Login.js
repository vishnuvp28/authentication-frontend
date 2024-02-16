import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { useEffect } from "react";
// import { API } from "../global";



const Login = ({user,setUser}) => {
  console.log("log in",user);
  useEffect(()=>setUser(null),[])
  const google = () => {
    // window.open(`https://multi-oauth.onrender.com/auth/google`, "_self");
    window.open(`http://localhost:5000/auth/google`, "_self");

  };

  const github = () => {
    window.open(`https://multi-oauth.onrender.com/auth/github`, "_self");
    // window.open(`http://localhost:5000/auth/github`, "_self");
  };

  const facebook = () => {
    // window.open(`https://multi-oauth.onrender.com/auth/facebook`, "_self");
    window.open(`http://localhost:5000/auth/facebook`, "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;