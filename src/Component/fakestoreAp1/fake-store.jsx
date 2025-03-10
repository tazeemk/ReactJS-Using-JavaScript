import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function FakeStore(){

 const[categories,setcategories]=useState([])
  const[products,setproducts]=useState([{id:0,title:'',category:'',description:'',image:'',price:0,rating:{rate:0,count:0}}])
  const[cartcount,setcartcount]=useState(0)
  const[cartItem,setcartItem]=useState([])
  function LoadCategory(){
        axios('https://fakestoreapi.com/products/categories').then(response=>{

          response.data.unshift('all')
            setcategories(response.data)
        })
    }
    function LoadProduct(url){
      axios(url).then(response=>{
        setproducts(response.data);
      })

        }
    
        function SelectCategory(e){
         if(e.target.value=="ALl"){
            LoadProduct('https://fakestoreapi.com/products');

         }else{
            LoadProduct(`https://fakestoreapi.com/products/category/${e.target.value}`)

         }

        }


        function Sethome(categoryname)
        {

   if(categoryname=='all'){
    LoadProduct('https://fakestoreapi.com/products')
   }else if(categoryname=='electronics'){
    LoadProduct(`https://fakestoreapi.com/products/category/${categoryname}`)
   }

        }


        function SetCartDetail(product){
            cartItem.push(product);
            alert(`${product.title} \n Added to cart`);
            setcartcount(cartItem.length);
              }

   useEffect(()=>{
    LoadCategory();
    LoadProduct('https://fakestoreapi.com/products');

   },[])

    return(
        <div className="container-fluid">
        <header className="d-flex justify-content-between p-2 bg-dark text-light">
         <div>
         <span className="h4">DevangHub.com</span>
         </div>
          <div className="fs-5">
           <span className="px-2"><button className="btn btn-light" onClick={()=>Sethome('all')}>Home</button></span>
           <span className="px-2"><button className="btn btn-light" onClick={()=>Sethome('electronics')}>Electronics</button></span>
           <span className="px-2">Jewelery</span>
           <span className="px-2">Mens Store</span>
          </div>
          <div>
            <button data-bs-target="#ca" data-bs-toggle="modal" className=" bi bi-cart4 btn btn-primary me-4 position-relative"><span className="badge rounded rounded-circle bg-danger">{cartcount}</span></button>
         <div className=" modal " id="ca">
        <div className=" modal-dialog">
        <div className=" modal-content">
        <div className="s modal-header"><h2 className="text-primary">Your Cart Items</h2> </div>
       <div className="modal-body">
   <table className="table table-hover">
    <thead>
        <tr>
            <th>title</th>
            <th>Preview</th>
            <th>Price</th>
        </tr>
    </thead>
<tbody>
{
  cartItem.map(item=>
    <tr key={item.id}>
      <td>{item.title}</td>
       <td>
        <img width="50" height="50" src={item.image}></img>
       </td>
       <td>{item.price}</td>
    </tr>
  )

}
</tbody>

   </table>
       </div>
       <div className="modal-footer">
   <button className="btn btn-primary " data-bs-dismiss="modal">Ok</button>
       </div>
        </div>
        </div>
         </div>
          </div>
        </header>
        <section className="mt-4 row">
         <nav className="col-2">
             <label className="form-label fw-bold">select category</label>
              <div>
              <select className="form-select" onChange={SelectCategory}>
                {
                    categories.map((category)=><option key={category} value={category}>{category.toUpperCase()}</option>)
                }
              </select>
              </div>
         </nav>

       <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>

         {

            products.map(product=>
                <div className="card p-2 m-2" style={{width:'200px'}}>
                       <img src={product.image} className="card-img-to" style={{height:'120px'}}></img>
                        <div className="card-header" style={{height:'130px'}}>
                        <div>
                            {product.title}
                        </div>
                       </div>
                        <div className="card-body">
                           <dl>
                            <dt>price</dt>
                            <dt>{product.price}</dt>
                            <dt>Ratings</dt>
                            <dd><span className="badge bg-success p-1 rounded">{product.rating.rate} <span className="bi bi-star-fill"></span></span> <span>{product.rating.count}</span></dd>
                           </dl>
                        </div>
                        <div className="card-footer">
                         <button onClick={()=>SetCartDetail(product)} className="btn btn-warning bi bi-cart4 w-100" >Add to cart</button>
                        </div>
                </div>
         )}

       </main>
        </section>
        </div>
    )
}