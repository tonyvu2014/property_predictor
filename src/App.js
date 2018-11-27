import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PredictorForm from './components/PredictorForm'
import Price from './components/Price'

class App extends Component {
  render() {
    return (
      <div>
        <PredictorForm />
        <Price />
      </div>      
    );
  }
}

export default App;
