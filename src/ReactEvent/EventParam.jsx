
export function EventParam() {

    function InsertValue(...msg)
    {
console.log(msg)
    }

    function NavbarSearch(){
        alert('Navbar Clicked')
    }
   function ButtonSearch(e){
    e.preventPropagation();
    alert('Button Clicked')
   }

    return(
<div className="container-fluid">
    <h2 style={{backgroudColor:'yellow',textAlign:'center'}}>Event Demo</h2>
<nav   onClick={NavbarSearch} className="p-3 bg-dark text-white">
<h2>NavBar</h2>
<button onClick={(e)=>ButtonSearch()} className="btn btn-primary bi bi-search">Search</button>


</nav>


</div>

    )
}


