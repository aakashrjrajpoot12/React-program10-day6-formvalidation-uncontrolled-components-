import React from 'react';
import {withFormik,Form,Field} from 'formik';
import * as Yup from 'yup' ;
const EmployeeForm =({errors,touched,isSubmitting})//this EmployeeForm is arrow function whic is taking   3 parameters
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
            <Field type="checkbox" name="manager"/>
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

handleSubmit(values,{props,resetForm,setSubmitting,setErrors}){
  //console.log(values);
  props.onSubmit(values);//pass the submitted values to the parent component,"App"
  setTimeout(()=>{
    if(values.empname=='god'){
      setErrors({empname:'You cannot add God as an employee'});
    }else{
      resetForm();
      alerrt(JSON.stringify(values));

    }
    setSubmitting(false);
    },2000);
  },
})(EmployeeForm);//EmployeeForm has been passed as argument to line 27 const FormikEmployeeform
export default FormikEmployeeform;


