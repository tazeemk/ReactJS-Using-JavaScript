import { useFormik } from "formik"


export function FormikDemo2(){

function ValidateForm(formvalid)
{
var errors={name:'',mobileno:0,stock:false,city:''}
if(formvalid.name==0){
    errors.name="Name Required"
}else{
    if(formvalid.name<4){
        errors.name="Name should be 4 character long"
    }else{
        errors.name=""
    }
}

if(formvalid.city==-1){
    errors.city="City Required"
}else{
    errors.city=""
}
return errors
}
  var formik = useFormik({
   initialValues: {
          name:'',
          mobileno:0,
          stock:false,
          city:''

   },
   validate: ValidateForm,
   onSubmit: (values) => {
 console.log(values);   
}
    })
    return(

        <div className="container-fluid ">
            <div>
           <form onSubmit={formik.handleSubmit} >
          <dl>
          <dt>Name</dt>
          <dd><input type="text" name="name" onChange={formik.handleChange} /></dd>
           <div className="bi bi-exclamation-triangle text-warning">{formik.errors.name}</div>
          <dt>Mobile Number</dt>
          <dd><input type="text" name="mobileno" onChange={formik.handleChange}/></dd>
          <dt>Stock</dt>
          <dd><input type="checkbox" name="stock" onChange={formik.handleChange}/>
          <label>Available</label>
          </dd>
          <dt>City</dt>
          <dd><select name="city" onChange={formik.handleChange} >
            <option value="-1">select city</option>
            <option value="new york">New York</option>
            <option value="los vegas">Los Vegas</option>
            <option value="chicago">Chicago</option>
            <option value="california">California</option>
            </select></dd>
           <dd className="text-danger">{formik.errors.city}</dd>
            <button type="submit" className="btn btn-primary">Submit</button>
          </dl>
           </form>
           </div>
        </div>
    )
}