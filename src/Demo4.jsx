import { useEffect, useState } from "react"

export function Demo4()
{
const [products,setProducts]=useState({title:'',price:0,rating:{rate:0,ratings:0,review:0},offers:[],image:''})
function LoadData(){

  //   $.ajax({
  //  method:"psot",
  //     url:"product.json",
  //     success:(response)=>{
  //   setProducts(response)
  //     },
  //     error:()=>{
  //       alert()
  //     }


  //   })
}

useEffect(()=>{
LoadData();

},[])

return(
<div className="container-fluid">   
     <div className="row mt-4">
      <div className="col-3">

      <img src={products.image}></img>
      </div>
       <div className="col-9">
            
           {products.title} <br></br>
           {products.price}
       </div>

    
    {products.rating.rate}
   

    </div>
 
 
 
    </div>

)
}