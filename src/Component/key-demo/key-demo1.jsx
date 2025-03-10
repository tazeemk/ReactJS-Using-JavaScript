import axios from "axios"
import { useEffect, useState } from "react"



export function KeyDemo(){
    const[userName,setuserName]=useState([{username:''}])
    const[userError,setuserError]=useState('')
useEffect(()=>{

    axios.get('user.json').then((response)=>{
        console.log(response.data)
        setuserName(response.data)
    })
},[])


function VerifyUserId(e){
var i = e.target.value;

for(var user of userName){
  if(user.username==i){
          setuserError('Name is already in use')
          break;
  }else{
    console.log(user.username)
  setuserError('Available username')
  }
}
}
    return(
        <div className="container-fluid">
     <dl>
<dt>userName</dt>
<dd><input type="text" onKeyUp={VerifyUserId}></input></dd>
<dd>{userError}</dd>
<dt>Password</dt>
<dd><input type="password"></input></dd>
<button>Submit</button> 
    </dl>
        </div>
    )
}