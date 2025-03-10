import { useEffect } from "react";
import { useState } from "react";

export function Login(){
useEffect(() =>{
    console.log("rendering")

    return()=>{
       console.log("Unrender")
    }
},[])
return(
    <div>
        <h1>Login</h1>
    </div>
)

}
export function Register(){
    useEffect(() =>{
        console.log("rendering")
    
        return()=>{
            console.log("Unrender")
         }
    },[])
    return(
        <div>
            <h1>Register</h1>
        </div>
    )
    }



export function UseEffectDemo(){
 const[component,setcomponent]=useState('');

 function onLoginClick(){
    setcomponent(<Login/>);
 }
 function onRegisterClick(){
    setcomponent(<Register/>);
 }


    return(
        <div className="container-fluid">
            <h1>Home</h1>
     <button onClick={onLoginClick}>Login</button>
     
     <button onClick={onRegisterClick}>Register</button>
      {component}
        </div>    
)
}