import { Formik, useFormik } from "formik"



export function FormikDemo(){

const formik = useFormik({
    initialValues: {
              Name:'',
              addr:'',
              price:0,
              city:''
    },
    onSubmit:(values)=>{
        console.log(values)
    }
})




    return(
        <div className="container-fluid">
          <form onSubmit={formik.onSubmit}>
             <dl>
        <dt>Name</dt>
       <dd> <input type="text" onChange={formik.handleChange} name="Name"></input></dd>
       <dt>addr</dt>
      <dd> <input type="text" onChange={formik.handleChange} name="addr"></input></dd>
      <dt>Price</dt>
       <dd> <input type="text" onChange={formik.handleChange} name="price"></input></dd>
       <dt>City</dt>
       <dd><select onChange={formik.handleChange} name="city">
        <option>New York</option>
        <option>Los Vegas</option>
        <option>California</option>
        </select> </dd>
             </dl>
            <button type="submit">Submit</button>
            </form>  
        </div>
    )
}