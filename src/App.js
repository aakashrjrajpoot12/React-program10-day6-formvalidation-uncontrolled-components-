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
    <MyForm onSubmit={(values)=> this.handleFormSubmit(values)} />
    //when we click on onSubmit it will call .handleFormSubmit(values) which is mentioned above line7
  );
}
}