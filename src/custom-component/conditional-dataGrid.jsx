import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function ConditionalGrid(props){
 
           if(props.design=="grid"){
           return(
            <div className="container-fluid">
          <table className="table table-hover caption-top">
            <caption >{props.caption}</caption>
            <thead>
                <div>
                    <button data-bs-target="#AddNew" data-bs-toggle="modal" className="btn btn-primary">+New</button>
                    <div className="modal fade" id="AddNew">
                        <div className="modal-dialog">
                       <div className="modal-content">
                        <div className="modal-header">{props.caption}</div> 
                        <div className="modal-body">
                            {
                                props.field.map(field=>
                                    <div key={field}>
                                     <dt>{field}</dt>
                                     <dd><input type="text" name={field}></input></dd>
                                    </div>
                                )
                            }
                        </div>
                        <div className="modal-footer"><button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                       </div>
                        </div>
                    </div>
                </div>
                <tr>{
                    props.field.map(title=><td key="title">
                     <div className="dropdown d-inline"><button data-bs-toggle="dropdown" data-bs-target="#menu" className="btn dropdown-toggle"></button><ul className="dropdown-menu" id="menu">
                        <li className="dropdown-item"><span className="bi bi-sort-alpha-down"></span>Sort Acceenging</li></ul></div>{title}</td>)
                    
                    }
              </tr>
            </thead>
            <tbody>
                    {
                        props.data.map(item=>
                        <tr key={item}>
                            {
                                Object.keys(item).map(dat=><td key="dat">{ item[dat]}</td>)
                            }
                            <td><button className="btn btn-warning bi bi-pen-fill"></button><button className="btn btn-warning bi bi-trash-fill"></button> </td>
                        </tr>
                        )
                    }
            </tbody>
         </table>
            </div>
           )

           } else{
             return(
                <div className="container-fluid d-flex">
                {
                    props.data.map(item=>
                        <div key={item} className="card p-2 m-2" style={{width:'200px'}}>
                        <div className="card-header">
                          {
                          item[props.field[0]]
                          }
                          </div>
                         <div className="card-body">
                          <dl>
                            <dt>{props.field[1]}</dt>
                             <dd>{
                                item[props.field[1]]
                              } </dd>
                             <dt>{props.field[2]}</dt>
                             <dd>{
                                item[props.field[2]]
                              } </dd>
                         
                          </dl>
                         </div>
               <div className="card-footer">
                <button className="btn btn-warning bi bi-pen-fill"> </button>
                <button className="btn btn-warning bi bi-trash-fill"></button>
                </div>
                      </div>
                    )
                }
                </div>
                   
            )

           }   

}