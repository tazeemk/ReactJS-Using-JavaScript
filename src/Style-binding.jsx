import { useState } from "react"

export function Stylebinding()
{
const[textcolors,settextcolors]= useState({color:'black'});

function GetColor(color){
    
    settextcolors({color:color})
}
function GetOut(color){
 settextcolors({color:'black'})
}
return(

    <div className="container-fluid">
   <h1>Style Binding</h1>
    <div className="d-flex">
     <div onMouseOver={()=>GetColor('red')} onMouseOut={GetOut} style={{backgroundColor:'red',height:'30px',width:'30px'}}></div>
     <div onMouseOver={()=>GetColor('green')} onMouseOut={GetOut} style={{backgroundColor:'green',height:'30px',width:'30px'}}></div>
     <div onMouseOver={()=>GetColor('blue')} onMouseOut={GetOut} style={{backgroundColor:'blue',height:'30px',width:'30px'}}></div>
    </div> 
  <div >
<h1 style={textcolors}>Sample Text :</h1>
  </div>
    </div>
)

}