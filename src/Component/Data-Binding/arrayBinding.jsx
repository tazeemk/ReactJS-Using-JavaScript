import { useEffect, useState } from "react"



export function ArrayBinding(){
  const[value]=useState(['name','devang'])
useEffect(()=>{


},[])

    return(
       <div>
        <ol> 
         <select>
              {
             value.map((data,index)=><option key="{index}">{data}</option>)      
              }
          </select>
          </ol>

       </div>         
 
    )
}