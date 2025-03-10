import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Home } from "./home";
import { Category } from "./catgory";
import { Login } from "./login";
import { Link } from "react-router-dom";
import { Error } from "./error";
import { Product } from "./product";
import { Search } from "./Search-demo";
import { Result } from "./resultj";
export function Index(){


    return(
        <div className="container-fluid ">
            <BrowserRouter>
           <header className="bg-dark text-white d-flex justify-content-between p-3 m-2">
            <div>
                <span className="fs-4 fw-bold ">DevnagHub.com</span>
            </div>
            <div>
            <Link to="/home" className="btn btn-light">   <span className="mx-3">Home</span></Link> 
                <span className="mx-3">categories</span>
                <span className="mx-3">Blog</span>
                <span className="mx-3">About</span>
            </div>
            <div>
             <Link to="/login"><span className="bi bi-person fs-5"></span></Link>
             <Link to="/search"><span className="bi bi-search mx-2"></span></Link>
              <span className="bi bi-cart mx-3 fs-5"></span>
            </div>
           </header>
         <section>
            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="category" element={<Category></Category>}></Route>
           <Route path="/login" element={<Login></Login>}></Route>
           <Route path="/error" element={<Error></Error>}></Route>
           <Route path="/product" element={<Product></Product> }></Route>
              <Route path="search" element={<Search></Search>}></Route>
              <Route path="result" element={<Result></Result>}></Route>
           <Route path="*" element={<h1>Invaid Path</h1>}></Route>
          </Routes>
         </section>
            </BrowserRouter>
        </div>
    )
}