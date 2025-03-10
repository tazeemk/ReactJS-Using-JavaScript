import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
export function Product(){
let params=useParams()
const[product,setproduct]=useState([{id:0,title:'',category:'',price:0,description:'',rating:{rate:0,count:0},image:''}])

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
       .then(response=>{
        setproduct(response.data)
       })
},[])
    return(
        <div className="container-fluid">
            <div>
        <h2>{params.category.toUpperCase()} Products</h2>
        <Link to="/category">Back To Category</Link>
    </div><br/>
    <div className="d-flex justify-content-between">
        {
            product.map(data=>
            <div  key={data.id}>
            <img src={data.image} width="100" height="100"></img>
            <div>${data.price}</div>
             <div className="btn btn-light"><Link className="btn btn-primary" to={`/details/${data.id}`}><span className="bi bi-eye"></span></Link></div>
             </div>)
        }
    </div>
        </div>
    )
}