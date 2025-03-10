import { useEffect, useState } from "react"

export function  Test(){
const[obj,setobj]=useState({color:'red',textAlign:'center'})

  useEffect(()=>{
  setobj({color:'green',textAlign:'right'})

  },[])

    return(
        <div>

             <h1 style={obj}>Welcome to ReactJS :</h1>

        </div>
    )
}