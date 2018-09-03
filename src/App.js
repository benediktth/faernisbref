import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './components/Badge.jsx';
import Filter from './components/Filter.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
        <Badge />
      </div>
    );
  }
}

export default App;
