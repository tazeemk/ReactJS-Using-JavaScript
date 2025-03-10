import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export function New(){
    const[title,settitle]=useState('')

    useEffect(() =>{
        axios.get('http://localhost:8082/BootBankingProj')
        .then(response => {
            settitle(response.data)
        })
    },[])
    return(
        <div className="container-fluid">
            <nav className="d-flex justify-content-between bg-dark text-light m-1 p-3">
    <div>
        <h3 className="mx-2">Gautam Dentals</h3>
    </div>
    <div>
        <span className="mx-2">Home</span>
        <span className="mx-2">About</span>
        <span className="mx-2">Contact</span>
    </div>
    <div>
        <button className="btn btn-primary bi bi-person-fill mx-2"/>
        <button className="btn btn-primary mx-2">Sign In</button> 
    </div>
            </nav>
            <main className="">
           <div>
            <h1 className="text-center">Welcome to Gautam Dentals</h1>
           </div>
            </main>
        </div>
    )
}