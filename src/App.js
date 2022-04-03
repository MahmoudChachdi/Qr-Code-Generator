import React, { Component }  from 'react'
import QrcodeInfo from './components/QrCodeInfo/QrCodeInfo.js';


import './App.css';




const initialState= {
    input:'',
    password:'',
    wifiName:'',





  }
class App extends  Component {
  constructor(){
    super()
    this.state= initialState;

  }

 

  render(){


  
  return (
    <>
<QrcodeInfo />
          

</>
  );
}}

export default App;
