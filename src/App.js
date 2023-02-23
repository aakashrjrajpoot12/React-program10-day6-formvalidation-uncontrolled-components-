import React from "react";
import "./style.css";
import MyForm from './FormValidation ';
//we are importing ./FormValidation with name as MyForm 

export default class App extends React.Component {
 handleFormSubmit(values){
   console.log('handlesubmit from App component');
   console.log(values);
 }
 
 render(){
  return (
    //To excess onSubmit we are using props.onsubmit line 46 inside FormValidation
    <MyForm onSubmit={(values)=> this.handleFormSubmit(values)} />
    // onSubmit  will call .handleFormSubmit(values) which is mentioned above line7 ,which means above function is going as value to onSubmit
  );
}
}