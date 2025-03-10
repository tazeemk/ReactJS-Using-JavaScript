import axios from "axios"
import { useEffect, useState } from "react"


export function AxiousBinding(){
const[emp ,setemp]=useState({name:'',age:0,addr:[],document:{aadharno:0,passno:0}})

function load(){
axios.get("emp.json").then(product=>{
    setemp(product.data)
}).catch(err=>{

});
}

useEffect(()=>{
load();
},[])

    return(
<div>
<span> name :{emp.name}</span>
<h1>{emp.age}</h1>
<br>
</br>
<ol className="accordion-item m-3 mt-3 p-lg-3 ">
    {
        emp.addr.map(data=><li>{data}</li>)

    }
</ol>
<span className="ms-3 fs-3 fw-bold text-secondary">{emp.document.aadharno}</span><br></br>
<span className="ms-3 fs-3">{emp.document.passno}</span>
</div>

    )
}