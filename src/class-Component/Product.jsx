import React from "react";

export class Product extends React.Component {



    constructor(){
        super();
        this.state={
            name: "Samsung TV",
            Cities :['jaunpur','New York','Los Angeles']
        }
     }


    render(){
 return(
      <div className="container-fluid">
         <dl>
     <dt>Product Name</dt>
        <dd>{this.state.name}</dd>
         <dt>Cities</dt>
         <dd>{
       this.state.Cities.map(data=><li>{data}</li>)
      
      }</dd>
         </dl>
        </div>
    ) 
}
}