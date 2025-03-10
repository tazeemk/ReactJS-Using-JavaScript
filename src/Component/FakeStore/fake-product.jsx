import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function FakeProduct(){
let param = useParams();
const[product,setproduct]=useState([{id:0,title:'',category:'',price:0,description:'',rating:{rate:0,count:0},image:''}]);
   
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${param.category}`).then(
        response=>{
            setproduct(response.data);
        }
    )
   },[])
   

return(
   <div className="container-fluid"> 
    <div>
        <h2>{param.category.toUpperCase()} Products</h2>
        <Link to="/category">Back To Category</Link>
    </div><br/>
    <div className="row">
    <div className="col-3">
    <div className="d-flex flex-column justify-content-between ">
        {
            product.map(data=>
            <div  key={data.id}>
            <img src={data.image} width="50" height="50"></img>
            <div className="d-flex justify-content-between btn btn-light" style={{width:'150px'}}> <span>${data.price}</span></div>
             <div className="btn btn-light"><Link className="btn btn-primary" to={`details/${data.id}`}><span className="bi bi-eye"></span></Link></div>
             </div>)
        }
    </div>
    </div>
    <div className="col-10">
          <Outlet></Outlet>
    </div>
    </div>
        </div>
    )
}