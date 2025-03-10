import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";


export function FormikComponentDemo(){


    return(
        <div>
            <Formik initialValues={{Name:'',Age:0,Mobile:''}} validationSchema={yup.object({ Name:yup.string().required().min(4,"min value"),Age:yup.number().required().min(18,"min age").max(60,"max age"),Mobile:yup.string().matches(/\+91\d{10}/,"InvaliD nUMBER")})} 
            onSubmit={(values) =>{ console.log(values)}}>
                   <Form>
                <dl>
           <dt>UserName</dt>
           <dd> <Field type="text" name="Name"></Field>  </dd>
           <dd> <ErrorMessage name="Name" ></ErrorMessage> </dd>
           <dt>Age</dt>
           <dd> <Field type="Number" name="Age"></Field>  </dd>
           <dd> <ErrorMessage name="Age" ></ErrorMessage> </dd>
           <dt>Mobile Number</dt>
           <dd> <Field type="text" name="Mobile"></Field>  </dd>
           <dd> <ErrorMessage name="Mobile" ></ErrorMessage> </dd>
                </dl>
                <button type="submit">Submit</button>
                   </Form>
            </Formik>
        </div>
    )
}