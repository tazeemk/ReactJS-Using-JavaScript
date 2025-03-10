import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export function FormikComponentDemo2() 
{


return(
    <div className="container-fluid">
        <h3>Register User</h3>
 <Formik  initialValues={{Name:'',Age:0,Mobile:'',Address:''}} validationSchema={yup.object({Name:yup.string().required("Name Required").min(4,"min lenght"),Age:yup.number().required().min(17,"Min age is 18"),
   Mobile:yup.string().required().matches(/\+91\d{10}/),Address:yup.string().required().min(10,"Minimum required")})} onSubmit={(values)=>{console.log(values)}}>
  {
  form=>
    <Form className={(form.isValid)?'bg-success w-25':'bg-danger w-25'} style={{padding:'10px'}}>
    <dl>
   <dt>Name</dt>
    <dd> <Field type="text" name="Name"></Field> </dd>
    <dd><ErrorMessage name="Name"></ErrorMessage></dd>
    <dt>Age</dt>
    <dd> <Field type="number" name="Age"></Field> </dd>
    <dd><ErrorMessage name="Age"></ErrorMessage></dd>
    <dt>Phone Number</dt>
    <dd> <Field type="text" name="Mobile"></Field> </dd>
    <dd><ErrorMessage name="Mobile"></ErrorMessage></dd>
    <dt>Address</dt>
    <dd> <Field type="text" name="Address"></Field> </dd>
   <dd><ErrorMessage name="Address"></ErrorMessage></dd>
    </dl>
    <button type="submit" className={(form.isValid)?"d-inline":"d-none"} disabled={!form.isValid}>Submit</button>
    </Form>
}
 </Formik>

    </div>
)
}