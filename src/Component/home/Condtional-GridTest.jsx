import { useState } from "react";
import { ConditionalGrid } from "../../custom-component/conditional-dataGrid";


export function GridTest(){
       const[layout,setlayout]=useState('grid')
       function HandlerChange(e){
           setlayout(e.target.value)
       }
    return(
        <div className="container-fluid">
            <h3>Layout</h3>
            <select onClick={HandlerChange}>
              <option>select</option>
              <option value="grid">Grid</option>
              <option value="card">Card</option>
            </select>
     <ConditionalGrid caption="employee" design={layout} field={['id','name','dept']} data={[{id:101,name:'devang',dept:'cs'},{id:102,name:'sahid',dept:'mbbs'}]}></ConditionalGrid>
        </div>
    )
}