import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export function FakeDetails(){
 let param =useParams();
 const[product,setproduct]=useState([{id:0,title:'',category:'',price:0,description:'',image:''}])
 useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${param.id}`)
    .then((response)=>{
        setproduct(response.data)
    });
 },[param.id])   
 
 return(
        <div className="container-fluid">
        <div className="card m-2 p-2" style={{width:'200px'}}>
           <img className="card-img-top" src={product.image} height="120px"></img>
        <div className="card-header">
            {product.title}
        </div>
        <div className="card-body">
       <dl>
        <dt>Price</dt>
       <dd>{product.price}</dd>
       <dt>Product Rating</dt>
       </dl>
        </div>
        <div className="card-footer">
       <Link to={`/product/${product.category}`}>Return to Product</Link>
        </div>
        </div>
        </div>
    )
}