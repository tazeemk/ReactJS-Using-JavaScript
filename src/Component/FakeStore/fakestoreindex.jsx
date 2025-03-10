import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { FakeHome } from "./Fake-home";
import { FakeCategory } from "./Fake-Category";
import { FakeProduct } from "./fake-product";
import { FakeDetails } from "./fakeStore-Details";
import { Login } from "./fake-login";
import { Link } from "react-router-dom";
import { Search } from "./Search-demo";
export function FakeStoreIndex() {


    return(
        <div >
       <BrowserRouter>
       <header className="d-flex justify-content-between p-3 m-2 bg-dark text-light">
          
           <div className="">
             <span className="fs-6 fw-bold">FakeStore.</span>
           </div>
           <div>
          <Link to="/home"> <span className="mx-3 btn btn-primary">Home</span> </Link>
            <span className="mx-3">About</span>
            <span className="mx-3">Contact</span>
            <span className="mx-3"> Lists </span>
           </div>
           <div>
            <span className="bi bi-cart mx-2"></span>
            <Link to="/search"><span className="bi bi-search mx-2"></span></Link>
            <Link to="/login"><span className="bi bi-person mx-2"></span></Link>
           </div>
          
          </header>
          <section>
            <Routes>
                 <Route path="/" element={<FakeHome></FakeHome>} ></Route>
                  <Route path="home" element={<FakeHome></FakeHome>}></Route>
                  <Route path="/category" element={<FakeCategory></FakeCategory>}></Route>
                  <Route path="/product/:category" element={<FakeProduct></FakeProduct>}>
                  <Route path="details/:id" element={<FakeDetails></FakeDetails>}/>
                  </Route>
                  <Route path="/search" element={<Search></Search>}></Route>
                        <Route path="login" element={<Login></Login>}></Route>
                      <Route path="*" element={<h2 className="text-danger">Not Found</h2>}></Route>
            </Routes>
          </section>
        </BrowserRouter>
        </div>
    )
}