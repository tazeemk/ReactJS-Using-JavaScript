import { useEffect, useState } from "react"


export function Normal(){
const[val,setval]=useState(prompt("enter your name"));
const[data]=useState("Devnag");
useEffect(()=>{
  if(val==null){
setval('bg-dark p-2')
  }else{

  }
},[])

  return(
<div className="container-fluid">
<h2 className={"text-center text-light  "}>Data Binding</h2>
<p></p>
</div>
  )  
}