import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API } from "../global";
const Navbar = ({ user ,setUser}) => {
  const navigate=useNavigate();
  console.log(user);


  const  logout = async() => {
    console.log(user);
    await axios.post(`https://multi-oauth.onrender.com/delete/user`, user);
 
setUser(null);
    navigate("/");
  };
  console.log(user);
  return (
 
    <div >
      <span >
        <Link className="link" to="/">
          Mutli Oauth
        </Link>
      </span>
      {user ? (
       
          <button className="listItem" onClick={logout}>
            Logout
          </button>
        
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
       )} 


     
    </div>
  );
};

export default Navbar;
