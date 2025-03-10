import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



export function MouseEventEx1(){
const[images,setimage] =useState([{img_src:""}])
const[preview,setpreview]=useState("iphone.jpg")

   function Loadimage(){
    axios.get('images.json').then(response=>{
        setimage(response.data)
    })
useEffect(()=>{
 Loadimage();
},[])

   }

   function GeneratePreview(e){
  setpreview(e.target.src)
   }
    return(
        <div className="container-fluid">
            <h1>MouseEvent</h1>
            <div className="mt-4 row">
                <div className="col-2">
                  {
                   images.map(image=><img onMouseOver={GeneratePreview} key={image.img_src} src={image.img_src} 
                   className="d-block my-3" width="50%"/>)
                  }
                </div>
            <div className="col-10">
                <img src={preview} className="mt4" style={{height:300}}></img>
            </div>
                </div>          
        </div>
    )
}