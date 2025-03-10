import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import axios, { Axios } from "axios"
export function Result(){

    const[product,setproduct]=useState([{id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''}])

    let [serachparams]=useSearchParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${serachparams.get('search')}`)
        .then(response=>{
           setproduct(response.data)
        })
    },[])

    return(

        <div className="container-fluid">
            <h2>Result</h2>
            <ul className="list-unstyled">
            {
                    product.map(product=>
                        <div key={product.id} className="card p-2 m-2">
                            <img src={product.image} width="100" height="100" />
                        </div>
                    )
                }
            </ul>
        </div>
    )
}