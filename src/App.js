import React, { Component } from 'react';

import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { showList } from './actions/actions';
import PropTypes from 'prop-types';



const listOfEmployees = ['Jon Snow', 'Arya Stark', 'Jaime Lannister'];
class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.showList();
  }

  render() {
    const postItems = this.props.employees.map(employee => (
      <div >
        <p>{employee}</p>
      </div>
    ))
    return (
      
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Employees</h1>
        { postItems }
      </div>
      
    )
  }
}
  
  App.PropTypes = {
    showList: PropTypes.func.isRequired,
    employees: PropTypes.array
}
const mapStateToProps = state => ({
    employees: state.employees.employees
});

// export default connect App;

export default connect(mapStateToProps, { showList })(App)