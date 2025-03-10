import { useCookies } from "react-cookie";
import { createCapche } from "../../hooks/createCapche";
import "./login.css"
import { useState } from "react";
export function Login(){
   const[title,settitle]= useState("Admin login");
   const[username,setusername]= useState('');
   const [cookies,setCookie,removeCookie]=useCookies(["username"]);
    const code = createCapche();

       function onUserSubmit(e)
       {
                 setusername(e.target.value);

       } 

   function HandleCookies(){
      setCookie("username",username);
   }

 return(                     
      <div className="container">
     <form className="form-login alert alert-warning alert-dismissible">
      <h3 className="bi bi-person-fill">{title}</h3>
      <button data-bs-dismiss="alert" className="btn btn-close"></button>
       <dl>
      <dt>Username</dt>
      <dd><input type="text" className="form-control" onChange={onUserSubmit}></input></dd>
      <dt>Password</dt>
      <dd><input type="password" className="form-control"></input></dd>
      <dt>Verify Capcha</dt>
      <dd>{code}</dd>
      </dl>
     <button className="btn btn-warning w-100" type="submit" onClick={HandleCookies}>submit</button>
     </form>
    </div>
 )
}
