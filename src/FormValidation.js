import React from 'react';
import {withFormik,Form,Field} from 'formik';//Formik is third party React form library. It provides basic form programming and validation. It is based on controlled component and greatly reduces the time to do form programming.
import * as Yup from 'yup' ;//Yup is a JavaScript schema builder for value parsing and validation.

const EmployeeForm =({errors,touched,isSubmitting})//this EmployeeForm is arrow function whic is taking   3 parameters
=>(
  <div>
    <h1>Employee Form</h1>
    <Form>{/* */ }{/* This is not HTML form it is provided by withFormik library*/ }
      <div>
        <Field type="text" name="empname" placeholder="Empname"/> {/* field from formik libraary*/}
        {touched.empname && errors.empname &&(//if in this field empname if i touch and also if i had entered wrong empname ,it is mandatory field
          <span style={{color:'red'}}>{errors.empname}</span> //errors.empname where,empname is  name of this field
        )}
        </div>

        <div>
          <label>
            <Field type="checkbox" name="manager"/>
            Manager
            </label>
            </div>

            <br/>
            <button type ="submit" disabled={isSubmitting}>Submit</button>
            </Form>
            </div>
);
//this below code is for validation and we had passed argument as Employee at below see line number 56
//(function())(argument)  :  IIFE(Immediately invoked functional expression),below mentioned code follows IIFE see below line 58 argument is passed inside that as Employee

const FormikEmployeeform=withFormik({mapPropsToValues({empname,manager}) {
  return{
    empname:empname||'',//empname would we empname or empty
    manager:manager||false,//manager is manager if checked otherwise false
  };
},
validationSchema: Yup.object().shape({
empname:Yup.string() //In this Schema Yup is mandotory required to validate not manager
.min(3,'Name must be at least 3 characters in length')//if empname is of 1 word than error would be genenrated 
.required('Name is required'),//As empname is mandotory
}),
//when we click on submit this handle submit would be called
handleSubmit(values,{props,resetForm,setSubmitting,setErrors}){//handle submit is function having 2 parameters, 1 is values and other is sequence of values
  //console.log(values);
  props.onSubmit(values);//pass the submitted values to the parent component,"App"
  setTimeout(()=>{
    if(values.empname=='God'){
      setErrors({empname:'You cannot add God as an employee'});
    }else{
      resetForm();//If i had given some value and after submitting it want to give another value then i need to earase it that's why resetForm is called 
      alerrt(JSON.stringify(values));

    }
    setSubmitting(false);},2000); //setSubmitting(false),which means form is not Submitted when you type God as empname,setTimeout method is closing here it would wait for 2 sec if value is god it will show You cannot add God as an employee'
  },
})(EmployeeForm);//EmployeeForm has been passed as argument to line 30 const FormikEmployeeform
export default FormikEmployeeform;


