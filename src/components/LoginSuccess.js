import { useEffect } from "react";
// import { API } from "../global";
import axios from "axios";
function LoginSuccess({user,setUser}) {
console.log("login success :", user)
useEffect(() => {
      const getUser = async() => {
   
      await axios.get("https://multi-oauth.onrender.com/auth/login/success")
      .then((res)=>setUser(res.data.user))
      .catch((err)=>console.log(err))
      }
      getUser();
      
    }, []);
  
  
  console.log(user)
    return(
        <div className="log">
        <h1>LoginSuccess</h1>
        <img className="img" src="https://media.licdn.com/dms/image/D4D12AQFYV33YTvI6pQ/article-cover_image-shrink_720_1280/0/1687146564848?e=2147483647&v=beta&t=pLQUhX-bTVJ0eDUA7x338WqLuJOJ6wYXX3R04v5qu94" alt="img"/>
        </div>
    )
}



export default LoginSuccess;