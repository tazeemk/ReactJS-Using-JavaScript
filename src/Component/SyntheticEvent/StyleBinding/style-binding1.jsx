import { useState } from "react"


export function StyleBinding(){
const[text,settext]=useState({color:'black'})

function Getover(color){
settext({color:color})
}
 function Reset(){
    settext({color:'black'})
 }
    return(
        <div className="container-fluid">
            <h1>StyleBinding</h1>
   <div className="d-flex">
   <div onMouseOver={()=>Getover('red')} onMouseOut={Reset} style={{backgroundColor:'red', width:"80px", height:"30px"}}></div>

   <div style={{backgroundColor:'green',width:'100px',height:'30px'}} onMouseOver={()=>Getover('green')} onMouseOut={Reset}></div>

   <div></div>
   </div>
        </div>
    )
}