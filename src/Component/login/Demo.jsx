
import { useEffect,useState } from "react"
import { Cookies } from "react-cookie";
export function Demo() 
{
  //const [code,setcode]=useState()

const[val]=useState('bg-dark p-2')
const[Mfd ,setMfd]=useState();
const title=useState('welcom devang')
useEffect(()=>{
//setcode(false);
setMfd(Date());
    },[]) 
   
return (
<div className="container-fluid"> 
<h2 className={`text-center text-warning ${val}`}> {title} :</h2>
  
Manufactiured date is = {Mfd}

</div>

)
}