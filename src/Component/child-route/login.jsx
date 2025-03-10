import { error } from "jquery";
import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
export function Login(){
 const[username,setusername]=useState('');
 const[password,setpassword]=useState('');
const[cookie,setcookie,removecookie]=useCookies(['userid'])
   let navigate =useNavigate()
function NameChange(e){
   setusername(e.target.value);
}

function PasswordChange(e){
    setpassword(e.target.value);
}

function VerfiyChange(){
    if(username=="devang"){
        setcookie("userid",username)
            navigate("/category")
    }else{
        navigate(<error/>)
    }
}
return(
        <div className="container-fluid">
      <div className="row">
 <div className="col">
 <dl>
    <h3>bootstrap</h3>
            <dt>UserName</dt>
        <dd> <input type="text" onChange={NameChange}></input></dd>
          <dt>PassWord</dt>
          <dd> <input type="password" onChange={PasswordChange}></input></dd>
         </dl>
         <button className="btn btn-primary " onClick={VerfiyChange} type="submit">Login</button>
 </div>

 <div className="col">
    <div className="my-3">
    <h3>Mui</h3>
  <TextField onChange={NameChange} placeholder="User id" variant="standard"></TextField>
  </div>
  <div className="my-3">
  <TextField onChange={PasswordChange} placeholder="Password" variant="standard"></TextField>
  </div>
  <div className="my-3">
    <Button onClick={VerfiyChange} variant="outlined" color="error">Login</Button>
  </div>
 </div>
      </div>
        </div>
    )
}