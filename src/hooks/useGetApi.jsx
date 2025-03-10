import { useEffect, useState } from "react";



export function useGetAPI(url){

 const[data,setdata]=useState([])

useEffect(()=>{
  
    fetch(url).then(response=>response.json()).then(collection=>{
        setdata(collection)
    });
},[url])

return data;
}