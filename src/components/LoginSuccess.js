import { useEffect } from "react";
// import { API } from "../global";
import axios from "axios";
function LoginSuccess({user,setUser}) {
console.log("login success :", user)
useEffect(() => {
      const getUser = async() => {
      //   await fetch(`https://multi-oauth.onrender.com/auth/login/success`, {
      //     // fetch(`http://localhost:5000/auth/login/success`, {
      //     method: "GET",
      //     credentials: "include",
      //     headers: { 
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Credentials": true,
      //     },
      //   })
      //     .then((response) => {
      //       if (response.status === 200) return response.json();
      //       throw new Error("authentication has been failed!");
      //     })

      //     .then((resObject) => {
      //       setUser(resObject.user);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // };
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
        </div>
    )

}



export default LoginSuccess;