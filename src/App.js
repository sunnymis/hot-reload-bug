import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './logo.svg';
import TestComponent from './TestComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to hot reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(App);