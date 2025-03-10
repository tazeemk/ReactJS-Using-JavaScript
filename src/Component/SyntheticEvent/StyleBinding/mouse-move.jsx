import { useState } from "react"


export function MouseMove1(){
    const[obj,setobj]=useState({position:'',top:'',left:''})

function SetPoint(e){
  setobj({position:'fixed',top:e.clientY + 'px',left:e.clientX + 'px'});
}

    return(
<div onMouseMove={SetPoint} className="container-fluid">
<div style={{height:'1000px'}}>
    <p>move mouse to test</p>
</div>
    <img src="flag.gif" width={50} height={50} style={{obj}}></img>
</div>

    )
}