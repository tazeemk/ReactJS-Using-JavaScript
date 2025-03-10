import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCookies } from "react-cookie";
export function Category(){
  const[categories,setcategories] = useState([])
  let navigate = useNavigate()
  const[cookie,setcookie,removecookie]=useCookies(['userid'])
   useEffect(() =>{
    if(cookie['userid']){
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response=>{
        setcategories(response.data)
    })
}else{
    navigate("/login")
}
   },[])  

   function HomeClick(){
    navigate('/home')
   }

   function HandleSignOut(){
    removecookie('userid')
 navigate('/home')   
}
  return(
        <div className="container-fluid">
            <div className="d-flex justify-content-between">
            <span>Category</span> <span>{cookie['userid']} is logged in</span>
            <button className="btn btn-primary" onClick={HandleSignOut}>SignOut</button>
            </div>
            <ul className="list-unstyled">
                {
                    categories.map((category)=><li className="my-3"><Link className="btn btn-dark w-25" to={`/product${category}`}>{category.toUpperCase()}</Link></li>
                    )
                }
            </ul>
        
            <span className="bi bi-house-door fs-4 btn btn-light" onClick={HomeClick}></span>
        </div>
    )
}