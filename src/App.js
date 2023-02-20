import React from "react";
import "./style.css";
import MyForm from './FormValidation ';

export default class App extends React.Component {
 handleFormSubmit(values){
   console.log('handlesubmit from App component');
   console.log(values);
 }
 
 render(){
  return (
    <MyForm onSubmit={(values)=> this.handleFormSubmit(values)} />
  );
}
}