import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export function DataGrid(props) 
{

return(
    <div className="container-fluid">
     <table className="table table-hover caption-top">
     <caption>
        <h3>{props.caption}</h3>
    </caption>
     <thead>
        <div>
            <button data-bs-target="#AddNew" data-bs-toggle="modal" className="btn btn-primary">+New</button>
        <div className="modal fade" id="AddNew">
        <div className="modal-dialog">
       <div className="modal-content">
        <div className="modal-header">{props.caption} </div>
        <div className="modal-body">
        <tr>
            {
                props.data.map(data=>
                    <div>
                        <dt>{data}</dt>
                        <dd><input type="text" name={data}></input></dd>
                    </div>
                )
            }
        </tr>
        </div>
        <div className="modal-footer">
            <button className="btn btn-primary">ADD</button>
        </div>
       </div>
        </div>
        </div>
        </div>
        
 
            <tr>{
                props.data.map((all)=> <td key={all}>{all}</td>)
           }</tr>
     </thead>
<tbody>
{
    props.field.map(item=>
         <tr key={item}>
             {
                Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
              }  
             <td><button className="btn btn-warning bi bi-pen-fill"/> <button className="btn btn-warning bi bi-trash-fill"></button></td>
             
         </tr>
             
    )
}

</tbody>

     </table>
    </div>
)
}