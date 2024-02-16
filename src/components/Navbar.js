import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API } from "../global";
const Navbar = ({ user ,setUser}) => {
  const navigate=useNavigate();
  console.log(user);


  const logout = () => {
    console.log(user);
    // axios.post(`https://multi-oauth.onrender.com/delete/user`, user);
    axios.post(`http://localhost:5000/delete/user`, user);
    // window.open("http://localhost:5000/auth/logout", "_self");
setUser(null);
    navigate("/");
  };
  console.log(user);
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Mutli Oauth
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem"></li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}


     
    </div>
  );
};

export default Navbar;
