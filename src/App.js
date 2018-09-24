import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const listOfEmployees = ['Jon Snow', 'Arya Stark', 'Jaime Lannister'];
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Redux Sample - Getting Employee Details</h3>
        <ul>
          <li>{listOfEmployees}</li>
        </ul>
      </div>
    );
  }
}

export default App;
