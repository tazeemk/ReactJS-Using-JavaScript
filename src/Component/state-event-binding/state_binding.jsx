import { useState } from "react"



export function StateBinding(){
const[msg,setmsg]=useState('')
const[code,setcode]=useState('')
function f1(){
    setmsg('daohdddb12','dhdjisbd1')
}
function f2(){
setmsg('')
}
function useDouble(e){
      setcode(e.target.value.toUpperCase())
}
    return(

        <div className="container-fluid">
         <h1>State Data Binding</h1>
        <dl>
      <dt>Bank IFSC Code</dt>
     <dd><input type="text" onChange={useDouble}  onFocus={f1} onBlur={f2} value={code}></input> </dd> 
       <dd className="text-danger">{msg}</dd>
        </dl>
        </div>
    )
}