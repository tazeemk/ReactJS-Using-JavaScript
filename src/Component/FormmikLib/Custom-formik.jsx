import { useFormik } from "formik"



export function CustomFormik(){

function ValidateForm(data){
  var errors ={Name:'',Age:'',Mobile:''}
  if(data.Name ==""){
    errors.Name="Name is required"
  }else{
    if(data.Name.length<3){
        errors.Name="Name should be at least 3 characters long"
    }else{
        errors.Name=""
    }
  }

if(isNaN(data.Age)){
    errors.Age="Age must be number"
}else{
    errors.Age=""
}
if(data.Mobile.match(/ \+91\d{10}/)){
    errors.Mobile=""
}else{
    errors.Mobile="Invalid Mobile Number"
}
  return errors;
}


    var formik= useFormik({
        initialValues: {Name:'',Age:'',Mobile:''},
        validate:ValidateForm,
        onSubmit: (values) => {
        console.log(values)
        }
    })


    return(
        <div className="container-fluid">
       <form onSubmit={formik.handleSubmit}>
<dl>
<dt>UserName</dt>
<dd><input type="text" name="Name" onChange={formik.handleChange} /></dd>
<dd className="text-danger">{formik.errors.Name}</dd>
<dt>Age</dt>
<dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
<dd className="text-danger">{formik.errors.Age}</dd>
<dt>MobileNumber</dt>
<dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
<dd className="text-danger">{formik.errors.Mobile}</dd>
</dl>
<button type="submit">Submit</button>
       </form>
        </div>
    )
}