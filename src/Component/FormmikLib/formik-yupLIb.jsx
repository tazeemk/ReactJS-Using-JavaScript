import { useFormik } from "formik"
import * as yup from "yup";


export function FormikYup(){

    var formik=useFormik({
      initialValues:{Name:'',Age:0,Mobile:''},
      validationSchema:yup.object({
       Name:yup.string().min(4,"min characters")
      }),
      onSubmit:values=>{
        console.log(values)
      }

    })
    return(
        <div className="container-fluid">
              <form onSubmit={formik.handleSubmit}> 
            <dl>
             <dt>User Name</dt>
           <dd> <input type="text" name="Name" onChange={formik.onChange}></input></dd>
            <dd className="text-danger">{formik.errors.Name}</dd>
             <dt>Age</dt>
           <dd> <input type="number" name="Age" onChange={formik.onChange}></input></dd>
           <dd className="text-danger">{formik.errors.Age}</dd>
             <dt>Mobile Number</dt>
           <dd> <input type="text" name="Mobile" onChange={formik.onChange}></input></dd>
           <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button type="submit">Submit</button>
              </form>
        </div>
    )
}