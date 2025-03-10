import { useState } from "react"


export function FormDemo(){
const[name,setname]=useState({name:'',price:0,stock:false,city:''})
const[product,setproduct]=useState({name:'',price:0,stock:false,city:''})

function Handlename(e){
setname({
  name:e.target.value,
  price:name.price,
  stock:name.stock,
  city:name.city
})
}
function Handleprice(e){
  setname({
    name:name.name,
    price:e.target.value,
    stock:name.stock,
    city:name.city
  })
}
function Handlestock(e){
  setname({
    name:name.name,
    price:name.price,
    stock:e.target.checked,
    city:name.city
  })
}
  
function Handlecity(e)
{

  setname({
    name:name.name,
    price:name.price,
    stock:name.stock,
    city:e.target.value
  })
}
function HandleSubmit(e){
console.log(name)
setproduct(name)
console.log()  
}

    return(
        <div className="container-fluid">
          <div className="row">
        <div className="col-3">
     <form>
   <dl>
  <dt>Name</dt>
  <dd><input type="text" onChange={Handlename} ></input></dd>
  <dt>Price</dt>
  <dd><input type="number" onChange={Handleprice}></input></dd>
  <dt>Stock</dt>
  <dd>
  <input type="checkbox" onChange={Handlestock} ></input><label >Available</label>
  </dd>

  <dt>City</dt>
  <select name="city" onChange={Handlecity}>
    <option>new york</option>
    <option>Chicago</option>
    <option>Los vegas</option>
    <option>Paris</option>
  </select>
   </dl>
   <button type="button" onClick={HandleSubmit}>Submit</button>
     </form>
     </div>
   
          <div className="col-9">
          <dl>
          <dt>Name</dt>
    <dd>{product.name}</dd>
    <dt>Price</dt>
  <dd>{product.price}</dd>
  <dt>Stock</dt>
  <dd>{(product.stock==true)?'Available':'Out Of Stock'}</dd>

  <dt>City</dt>
  <dd>{product.city}</dd>
   </dl>
          </div>
          </div>
         </div>
    )
}
