import React from "react";

export class TwoWay extends React.Component
{  
              constructor(){

                super();
            this.state = {
                name:'',
                price:0,
                stock:false
            }
              }

         onHandleChange(){
            this.setState({name:'John',price:100,stock:true})
         }


    render(){
        return (
        <div className="container-fluid">
           <dl>
          <dt>Name</dt>
         <dd><input type="text">Enter Product Name</input></dd>
           <dt>Price</dt>
           <dd>Enter Price</dd>
           <dt>Stock</dt>
          <dd><input type="checkbox"><label>Available</label></input></dd>
           </dl>
        </div>
    )}
}