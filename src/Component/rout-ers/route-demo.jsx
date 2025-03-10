import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "../login/login";
import { Animation } from "../../Practice/Animation-demo";
export function Demo(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
        <header className="d-flex justify-content-around bg-dark text-light p-3" style={{height:'120px'}}>
            <div className="picture p-2">
           <img src="devang.jpg" height="90px"></img>
            </div>
            <div>
                <h1>MUSA KAREEM</h1>
            </div>
            <div>
          <Link to="about" className="btn btn-primary ms-2">About</Link>             
          <Link to="country" className="btn btn-warning ms-2">Country</Link>             
          <Link to="login" className="bi bi-person-fill "></Link>             
          <Link to="animation" className="bi bi-person-fill ">Animation</Link>
            </div>
        </header>
        
       
        <section className="bg-secondary text-white p-3" style={{height:'100vh'}}>
<Routes>
      <Route path="/" element={<div><h2>Java Developer</h2><p>Core Java || Adv Java || SpringBoot And MicroServices</p> </div>}></Route> 
       <Route path="about" element={<div><h1>Cheif Commander</h1><p>He is Most Crusical for AndhBhakt And baad people give 
        will invented that new punishment when andhbhakt will see they will pees in her paint and commander devang is good for good peoples he likes honesty and lobal peoples</p></div>}></Route>
         <Route path="country" element={<div><h2>All ares</h2> <ol>USA</ol> <ol>Russia</ol> <ol>France</ol></div>}></Route>
       <Route path="login"  element={<Login></Login>}></Route>
          <Route path="animation" element={<Animation></Animation>}></Route>
</Routes>

        </section>
        </BrowserRouter>
        </div>
    )
}