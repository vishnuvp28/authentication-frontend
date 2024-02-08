import { useEffect } from "react";
// import { API } from "../global";

function LoginSuccess({user,setUser}) {

useEffect(() => {
      const getUser = () => {
        fetch(`https://multi-oauth.onrender.com/auth/login/success`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })

          .then((resObject) => {
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
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