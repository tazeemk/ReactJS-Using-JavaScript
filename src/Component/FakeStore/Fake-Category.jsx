import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function FakeCategory(){
     const[categories,setcategories]=useState([])

     useEffect(() =>{
        axios.get('https://fakestoreapi.com/products/categories').then((response) =>{
             setcategories(response.data)
        })
     },[])
    return(
        <div className="container-fluid">
           <h3>Categories</h3>
           <ul className="list-unstyled">
            {
                categories.map(data=><li className="my-3" key={data}><Link className="btn btn-dark w-25" to={`/product/${data}`}>{data.toUpperCase()} </Link></li>)
            }
           </ul>
<div>
    <Link to="/home">Return To Home Page</Link>
</div>
        </div>
    )
}