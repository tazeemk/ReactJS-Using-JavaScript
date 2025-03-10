import { useState } from "react"
export function ClassDataBinding() 
{
    const[theme,settheme]=useState('border border-1 p-4')
    const[btntheme,setbtntheme]=useState('btn btn-dark w-100')

    function togletheme(e)
    {
        if(e.target.checked){
          settheme('border border-1 p-4 bg-dark text-white');
          setbtntheme('btn btn-warning w-100');
        } else {
          settheme('border border-1 p-4');
          setbtntheme('btn btn-dark w-100');
        }
        }

    
return(
<div className="container-fluid">
<div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    <form className={theme}>
        <div className="form-switch">
       <input  onChange={togletheme} type="checkbox" className="form-check-input"/><label>Dark Theme</label>       
        </div>
        <h3 className="bi bi-person-fill">User Login</h3>
       <dl>
        <dt>UserName</dt>
        <dd ><input type="text" className="form-control"></input></dd>
        <dt>PassWord</dt>
        <dd ><input type="text" className="form-control"></input></dd>
       </dl>
       <button className="btn btn-primary">Login</button>
    </form>
</div>
</div>
)
}