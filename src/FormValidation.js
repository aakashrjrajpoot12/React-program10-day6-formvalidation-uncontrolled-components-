import React from 'react';
import {withFormik,Form,Field} from 'formik';
import * as Yup from 'yup' ;
const Employee =({errors,touched,isSubmitting})
=>(
  <div>
    <h1>Employee Form</h1>
    <Form>
      <div>
        <Field type="text" name="empname"
        placeholder="Empname"/>
        {touched.empname && errors.empname &&(
          <span style={{color:'red'}}>{errors.empname}</span>
        )}
        </div>
        <div>
          <label>
            <Filed type="checkbox" name="manager"/>
            Manger
            </label>
            </div>
            <br/>
            <button type ="submit" disabled={isSubmitting}>Submit</button>
            </Form>
            </div>
);
const FormikEmployeeform=withFormik({mapPropsRoValues({empname,manager}){
  return{
    empname:empname||'',
    manager:mananger||flase,
  };
},
validationSchemea:Yup.object().shape({
empname:Yup.string().min(3,'Name must be at least 3 characters in length')
.required('Name is required'),
}),
handleSubmit(values{props,})
)


)