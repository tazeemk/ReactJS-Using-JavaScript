import { useState } from "react"
import './animation-demo.css'



export function Animation(){
const[anistyle,setanistyle]=useState('')
 
function SpinClick(){
setanistyle('image-spin')
console.log("Spin Clicked, Animation style: ", 'image-spin');
}
function ZoomClick(){
setanistyle('image-zoom')
}

    return(
        <div className="container-fluid">
         <div className="d-flex justify-content-center align-items-center bg-dark" style={{height:'100vh'}}>
          <div className='text-center'>
           <img src="shuja.jpg" className={anistyle} style={{height:'250px', width:'300px'}}></img>
           <div className="mt-3">
            <button onClick={SpinClick} className="btn btn-primary btn me-2">Spin</button>
            <button onClick={ZoomClick} className="btn btn-warning">Zoom</button>
           </div>
          </div>
         </div>
        </div>
    )
}