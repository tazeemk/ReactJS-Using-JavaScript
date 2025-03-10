import { Nav } from "react-bootstrap";

export function Navbar(props){

return(
    <div className="container-fluid">
   <nav className={` d-flex justify-content-between p-2 border border-1 ${props.theme}`}>
   <div>
    <span>{props.BrandTitle}</span>
   </div>
<div>
    {
        props.MenuItems.map(( index) => <span key={index} className="px-3">{index}</span>)
    }
</div>
<div>
<div className="input-group">
    <span><input type="text" className="form-control" placeholder="search"></input></span>
    <button className="btn btn-warning bi bi-search"></button>
</div>
</div>
   </nav>
    </div>
)
}