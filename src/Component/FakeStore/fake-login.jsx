

export function Login(){
 return(
    <div className="container-fluid ">
     <div className="d-flex align-items-center text-light justify-content-center " style={{height:'100vh'}}>
   <form className="border border-1 p-4 bg-dark">
    <h2>Registration</h2>
   <dl className="align-items-center">
    <dt>UserName</dt>
      <dd><input type="text"></input></dd>
      <dt>Password</dt>
      <dd><input type="text"></input></dd>
  </dl>
  <button className="btn btn-primary">Login</button>
   </form>
     </div>
    </div>
 )
}