import { useEffect, useState } from "react"




 export function ObjectDemo(){
const[product]=useState({name:"samsung",price:1023,cities:['hyd','mumbai']});
  
  useEffect(()=>{


  },[])      

    return(


        <div className="container-fluid">

               <dl>
                <dt>Names :</dt>
                <dd>{product.name}</dd>
              
                     <dt>Price :</dt>
                     <dd>{product.price}</dd> 
                     <dt>cities</dt>
                     {
                        product.cities.map(cit=><li key="cit">{cit}</li>)
                     }
                     </dl>
        </div>
    )
}