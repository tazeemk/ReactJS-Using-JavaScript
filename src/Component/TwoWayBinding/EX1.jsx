import { useState } from "react"



export function TwoWayBinding(){
  const[User,setUser]=useState('Devang')
  function UserBinding(e){
    setUser(e.target.value)

  } 
 
    return(
     <div className="container-fluid">
        <h1>Two Way Binding</h1> 
<label>Name</label>
<input type="text" onChange={UserBinding}  value={User} ></input>
 <h2>Hello !{User}</h2>

     </div>
    )
}