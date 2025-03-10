import { useEffect, useState } from "react"

 export function ArrayUse(){

const[categories]=useState('food','sweet','snakes');
 useEffect(()=>{

 },[]);

    return(
     <div className="container-fluid">
<ol>
<select>
{
     categories.Map(category=> <li>{category}</li>)
}
</select>
</ol>
     </div>

    )
}