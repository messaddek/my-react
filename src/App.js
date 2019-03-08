import React, { Component } from 'react';
import logo from './logo.svg';
import FormContainer from './components/DateValidations'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="App">
              <FormContainer />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
