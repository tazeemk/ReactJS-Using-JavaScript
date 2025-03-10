import { useEffect, useState } from "react"


export function ObjectBinding(){
  const[product]=useState({"name":'devnag',"Phone":9999999,cities:["hyd","delhi","jnu"]});
  const[Emp]=useState(["hello","world"]);

        useEffect(()=>{
               
          
             
        },[])
 
    return(
        <div className="container-fluid">
         <dl className="border-2 alert-danger">
         <dt> Name </dt>
         <dd>{product.name}</dd>
         <dt>Phone Number</dt>
         <dd>{product.Phone}</dd>

          <dt>Cities</dt>
          <dd>
         <ol>
                {
              product.cities.map(city=><li key="city">{city}</li>)
         
                  }
                      
           </ol>
          </dd>
         </dl>
          <br></br>
            <ol>
          <select>
{
          Emp.map(product=><option>{product}</option>)
        
}
          </select>
            </ol>

        </div>
    )
}